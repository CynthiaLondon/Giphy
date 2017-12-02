


//array

var movies = ["Cats!", "Dogs!", "Elepants!", "Monkeys!", "Skunks!"];


//movie data function

function renderButtons() {

	//deletes buttons

	$('moviesView').empty();


	//loop
	for (var i = 0; i < movies.length; i++) {
		
		//add buttons

		var a = $('<button>')
		a.addClass('movie'); //adds a class
		a.attr('data-name', movies[i]);
		a.text(movies[i]);
		$('#moviesView').append(a);


	}

}

//one button clicked fuction

		$('addMovie').on('click', function(){

			//grabs textbox input
			var movie = $("movie-input").val()trim();

			//adds input to array
			movies.push(movie);

			//create button
			renderButtons();

			//default
			return false;

		})




		//call render button
		renderButtons();

