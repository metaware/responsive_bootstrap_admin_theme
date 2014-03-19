//Get the context of the canvas element we want to select

$(window).resize(function(){
	$(".sidebar").css("height", "");
});


$(document).ready(function(){
	$("li.menu").not(".sub_menu li").click(function(){
		$(this).find(".sub_menu").toggle();
	})

	var date = new Date();
	var d = date.getDate();
	var m = date.getMonth();
	var y = date.getFullYear();
	
	$('#calendar').fullCalendar({
		header: {
			left: 'prev,next today',
			center: 'title',
			right: 'month,basicWeek,basicDay'
		},
		eventRender: function (event, element, monthView) { 
			element.addClass("animated");
			element.addClass("fadeInRight");
		},

		editable: true,
		events: [
			{
				title: 'All Day Event',
				start: new Date(y, m, 1),
				color: "#35495e"
			},
			{
				title: 'Long Event',
				start: new Date(y, m, d-5),
				end: new Date(y, m, d-2),
				color: "#a90329"
			},
			{
				id: 999,
				title: 'Repeating Event',
				start: new Date(y, m, d-3, 16, 0),
				allDay: false,
				color: "#35495e"
			},
			{
				id: 999,
				title: 'Repeating Event',
				start: new Date(y, m, d+4, 16, 0),
				allDay: false,
				color: "#35495e"
			},
			{
				title: 'Meeting',
				start: new Date(y, m, d, 10, 30),
				allDay: false,
				color: "#35495e"
			},
			{
				title: 'Lunch',
				start: new Date(y, m, d, 12, 0),
				end: new Date(y, m, d, 14, 0),
				allDay: false,
				color: "#a90329"
			},
			{
				title: 'Birthday Party',
				start: new Date(y, m, d+1, 19, 0),
				end: new Date(y, m, d+1, 22, 30),
				allDay: false,
				color: "#a90329"
			},
			{
				title: 'Click for Google',
				start: new Date(y, m, 28),
				end: new Date(y, m, 29),
				url: 'http://google.com/',
				color: "#a90329"
			}
		]
	});
});
