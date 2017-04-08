/**
 * All code by: Matt DePero
 * DataFest 2017 - Miami University
 */

function start() {
	new Morris.Line({
	  element: 'test-chart',
	  data: [
	    { y: 'a', a: 5, b: 1 },
	    { y: 'b', a: 10,  b: 2 },
	    { y: 'c', a: 15,  b: 3 },
	    { y: 'd', a: 10,  b: 4 },
	    { y: 'e', a: 5,  b: 5 },
	    { y: 'f', a: 10,  b: 6 },
	    { y: 'g', a: 0, b: 7 }
	  ],
	  xkey: 'y',
	  ykeys: ['a', 'b'],
	  labels: ['Series A', 'Series B']
	});
}


$(document).ready(start);