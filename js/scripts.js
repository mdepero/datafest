/**
 * All code by: Matt DePero
 * DataFest 2017 - Miami University
 */

var something = 10;

function start() {
	new Morris.Line({
	  element: 'test-chart-1',
	  data: [
	    { y: 1, a: 0 },
	    { y: 2, a: 2 },
	    { y: 3, a: 5 },
	    { y: 4, a: 10 },
	    { y: 5, a: 20 },
	    { y: 6, a: 40 },
	    { y: 7, a: 80 },
	    { y: 8, a: 40 },
	    { y: 9, a: 10 },
	    { y: 10, a: 5 },
	    { y: 11, a: 3 },
	    { y: 12, a: 2 },
	    { y: 13, a: 1 },
	    { y: 14, a: 1 }
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

	new Morris.Line({
	  element: 'test-chart-2',
	  data: [
	    { y: 1, a: 0 },
	    { y: 2, a: 2 },
	    { y: 3, a: 5 },
	    { y: 4, a: 10 },
	    { y: 5, a: 20 },
	    { y: 6, a: 40 },
	    { y: 7, a: 80 },
	    { y: 8, a: 40 },
	    { y: 9, a: 10 },
	    { y: 10, a: 5 },
	    { y: 11, a: 3 },
	    { y: 12, a: 2 },
	    { y: 13, a: 1 },
	    { y: 14, a: 1 }
	  ],
	  xkey: 'y',
	  ykeys: ['a'],
	  labels: ['Series A', 'Series B'],
	  resize: true,
	  axes: false,
	  hideHover: 'always',
	  events: [3],
	  eventStrokeWidth: 4
	});

	new Morris.Line({
	  element: 'test-chart-3',
	  data: [
	    { y: 1, a: 0 },
	    { y: 2, a: 2 },
	    { y: 3, a: 5 },
	    { y: 4, a: 10 },
	    { y: 5, a: 20 },
	    { y: 6, a: 40 },
	    { y: 7, a: 80 },
	    { y: 8, a: 40 },
	    { y: 9, a: 10 },
	    { y: 10, a: 5 },
	    { y: 11, a: 3 },
	    { y: 12, a: 2 },
	    { y: 13, a: 1 },
	    { y: 14, a: 1 }
	  ],
	  xkey: 'y',
	  ykeys: ['a'],
	  labels: ['Series A', 'Series B'],
	  resize: true,
	  axes: false,
	  hideHover: 'always',
	  events: [12],
	  eventStrokeWidth: 4
	});

	new Morris.Line({
	  element: 'test-chart-4',
	  data: [
	    { y: 1, a: 0 },
	    { y: 2, a: 2 },
	    { y: 3, a: 5 },
	    { y: 4, a: 10 },
	    { y: 5, a: 20 },
	    { y: 6, a: 40 },
	    { y: 7, a: 80 },
	    { y: 8, a: 40 },
	    { y: 9, a: 10 },
	    { y: 10, a: 5 },
	    { y: 11, a: 3 },
	    { y: 12, a: 2 },
	    { y: 13, a: 1 },
	    { y: 14, a: 1 }
	  ],
	  xkey: 'y',
	  ykeys: ['a'],
	  labels: ['Series A', 'Series B'],
	  resize: true,
	  axes: false,
	  hideHover: 'always',
	  events: [10],
	  eventStrokeWidth: 4
	});
}



$(document).ready(start);