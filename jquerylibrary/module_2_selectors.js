alert('jQuery is working!');


$(function(){
	//By id - this adds a CSS class
	$('#example-one').addClass('highlight');

	//By class - we'll make two things change here.
	$('.example-two').css('border', '4px solid gray');

	//By element
	$('h5').click(function(){
		$('h5').fadeOut('slow', 'linear');
	});

	//https://jqueryui.com/draggable/
	//$('#draggable').draggable();

	$('#id-combo-demo, .class-combo-demo, #draggable').draggable();

	$('li:contains("weather")').click(function(){
		$(this).hide()
	});//hides anything with the key word in it (i.e. "weather")

}); //Notice that we didn't use the document.ready() function like we have in past couple modules. This is because
   // $(function(){} is an even shorter way to write $(document).ready(function(){}. However you will see both in 
   //modern applications