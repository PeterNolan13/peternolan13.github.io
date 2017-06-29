alert('js is working!');

$(document).ready(function(){
	$("#add").on("click", function(){
		var song = $("#song").val();
		var insertedHTML = "<li>" + song + "." + "</li>";
		$("#song-list").append(insertedHTML);
		$("#song").val("");

	$('li:contains(".")').click(function(){
		$(this).hide();
	})
	});

	/*$("#remove").on("click", function(){
		var song = $("#song").val();
		//var insertedHTML = "<li>" + song + "</li>";
		$("#song-list").remove(song);
		//$("#song").val("");

	});*/


	$("#add1").on("click", function(){
		var genre = $("#genre").val();
		var insertedHTML1 = "<li>" + genre + "." + "</li>";
		$("#genre-list").append(insertedHTML1);
		$("#genre").val("")

			$('li:contains(".")').click(function(){
		$(this).hide();
	})

	})



	/*$("#remove1").on("click", function(){
		var genre = $("#genre").val();
		//var insertedHTML = "<li>" + song + "</li>";
		$("#genre-list").remove(genre);
		//$("#song").val("");
	})*/
});

/*Here is the flow of what is happening.
We target the add id.
When that gets clicked, we run the on function.
Whatever value is entered into the song input is stored in the song variable.
We then take the song variable, and make a template for our list items.
That template is stored into the insertedHTML variable.
We append that variable to the song-list id.
Finally, we change the value of the song input back to blank.
*/