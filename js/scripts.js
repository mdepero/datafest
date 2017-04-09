/**
 * All code by: Matt DePero
 * DataFest 2017 - Miami University
 */

// from https://css-tricks.com/snippets/javascript/get-url-variables/
function getQueryVariable(variable) {
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}




var something = 10;

var rawData;

var destID = "";

function start() {
	if (getQueryVariable('id') == '' || getQueryVariable('id')===undefined) {
		window.location = './start';
	}else{
		getDistrictIds();
	}

	$('#hotel_name').html(getQueryVariable('id'));

	$('#run').click(getCurrentData);
}

function getDistrictIds() {
	$.post(
		"http://localhost:8008/dests.php",
	    {
	        id: getQueryVariable('id')
	    },
    	destListCallback
	);
}

function destListCallback(data) {
	// console.log(data); return;

	var destRawData = JSON.parse(data);
	var first = true;
	destID = "HotelID in (";
	destRawData.forEach(function myFunction(item, index) {
		if(first) first = false;
		else destID += ',';
		destID += "'"+item+"'";
	});
	destID += ")";

	$('#run').prop('disabled',false);
	// console.log(destID);
}

function getCurrentData() {
	$('#run').prop('disabled',true);

	console.log("Sending request...");
	var sql = "SELECT * FROM Clicks WHERE ";
	var label = "";
	var first = true;
	$('input[type=checkbox]').each(function () {
           if (this.checked) {
                if(this.name != label) {
                	if(first) first = false;
                	else sql += ') AND ';
                	sql += this.name + ' in (' + "'" + this.value + "'";

                	label = this.name;
                }else{
                	sql += ','+ "'" + this.value + "'";
                }
           }
	});
	if(first == false)
		sql += ')';
	if($("input[name='District']:checked").val() == "1") {
		if (first == false) sql += ' AND ';
		sql += destID;
	}
	console.log(sql);
	$.post(
		"http://localhost:8008/index.php",
	    {
	        query: sql,
	        id: getQueryVariable('id')
	    },
    	dataReturnCallback
	);
}

function dataReturnCallbackTest(data) {
	console.log(data);
	//console.log(JSON.parse(data));
}


function dataReturnCallback(data) {

	console.log(data);

	rawData = JSON.parse(data);

	if(rawData.setValues.branded != "1") $('#branded').html("You are NOT branded.");
	else $('#branded').html("You are branded.");

	if(rawData.setValues.rating == "0") $('#rating').html("You are not rated.");
	else $('#ratings').html("Your rating is "+rawData.setValues.rating+".");

	switch(rawData.setValues.popularity){
		case "VL": 
			$('#popularity').html("Your popularity is Very Low.");
			break;
		case "L": 
			$('#popularity').html("Your popularity is Low.");
			break;
		case "M": 
			$('#popularity').html("Your popularity is Medium.");
			break;
		case "H": 
			$('#popularity').html("Your popularity is High.");
			break;
		case "VH": 
			$('#popularity').html("Your popularity is Very High.");
			break;
	}

	$('#test-chart-1-container').html('<div id="test-chart-1-percent"></div><div class="chart" id="test-chart-1"></div>');
	$('#test-chart-1-percent').html(rawData.dataSets[1].target/40);

	new Morris.Line({
	  element: 'test-chart-1',
	  data: rawData.dataSets[1].data,
	  xkey: 'x',
	  ykeys: ['y'],
	  resize: true,
	  axes: false,
	  hideHover: 'always',
	  events: [rawData.dataSets[1].target],
	  eventStrokeWidth: 4
	});

	$('#test-chart-2-container').html('<div id="test-chart-2-percent"></div><div class="chart" id="test-chart-2"></div>');
	$('#test-chart-2-percent').html(rawData.dataSets[2].target/40);

	new Morris.Line({
	  element: 'test-chart-2',
	  data: rawData.dataSets[2].data,
	  xkey: 'x',
	  ykeys: ['y'],
	  resize: true,
	  axes: false,
	  hideHover: 'always',
	  events: [rawData.dataSets[2].target],
	  eventStrokeWidth: 4
	});

	$('#test-chart-3-container').html('<div id="test-chart-3-percent"></div><div class="chart" id="test-chart-3"></div>');
	$('#test-chart-3-percent').html(rawData.dataSets[0].target/40);

	new Morris.Line({
	  element: 'test-chart-3',
	  data: rawData.dataSets[0].data,
	  xkey: 'x',
	  ykeys: ['y'],
	  resize: true,
	  axes: false,
	  hideHover: 'always',
	  events: [rawData.dataSets[0].target],
	  eventStrokeWidth: 4
	});


	$('#run').prop('disabled',false);

	
}


$(document).ready(start);