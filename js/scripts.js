/**
 * All code by: Matt DePero
 * DataFest 2017 - Miami University
 */

var something = 10;

function start() {
	new Morris.Line({
	  element: 'test-chart',
	  data: [
	    { y: 1, a: 0 },
	    { y: 2, a: 2 },
	    { y: 3, a: 5 },
	    { y: 4, a: 15 },
	    { y: 5, a: 7 },
	    { y: 6, a: 2 },
	    { y: 7, a: 1 }
	  ],
	  xkey: 'y',
	  ykeys: ['a'],
	  labels: ['Series A', 'Series B'],
	  resize: true,
	  axes: false,
	  hideHover: 'always',
	  events: [5],
	  eventStrokeWidth: 4
	});
}


$(document).ready(start);