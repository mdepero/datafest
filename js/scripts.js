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


function start() {
	if (getQueryVariable('id') == '' || getQueryVariable('id')===undefined) {
		window.location = './start';
	}else{
		//getCurrentData();
	}

	$('#run').click(getCurrentData);
}

function getCurrentData() {
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
	sql += ')';
	console.log(sql);
	$.post(
		"http://localhost:8008/",
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

	$('#test-chart-1-container').html('<div id="test-chart-1-percent"></div><div class="chart" id="test-chart-1"></div>');

	$('#test-chart-1-percent').html(rawData.target/50);

	new Morris.Line({
	  element: 'test-chart-1',
	  data: rawData.data,
	  xkey: 'x',
	  ykeys: ['y'],
	  resize: true,
	  axes: false,
	  hideHover: 'always',
	  events: [rawData.target],
	  eventStrokeWidth: 4
	});

	
}


$(document).ready(start);