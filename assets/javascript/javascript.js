
//DOM ready
$(document).ready();

//define starting buttons
var topics = ["Polar Bear", "Blue Whale", "Penguin"];

//function to make buttons
    function renderButtons() {
        $('#startingButtons').empty();

        //for loop to create buttons from array
        for (i = 0; i < topics.length; i++) {

            //create a button 
            var a = $('<button>');
            //add button to class topic
            a.addClass('#topic');
            a.addClass('btn btn-primary')
            //add the array name to button
            a.attr('data-name', topics[i]);
            a.text(topics[i]);
            //append text from array to button
            $('#startingButtons').append(a);


          
        }
        //call add gif function below to add gifs when buttons clicked
        addGif();
    }
    //create buttons
    $('#grabUserInput').on('click', function() {

        //this grabs user input and trims it
        var gify = $('#user-Input').val().trim();
        //send the value to gify
        topics.push(gify);
        //create the button
        renderButtons();
        $('#user-Input').val("");
        return false;
    });
   //calls render function above, adds text inputed
    renderButtons();

    //add gifs when buttons clicked
    function addGif() {
        $('button').on("click", function() {
            //clear out div before adding gifs
            $('#gifsAppearHere').empty();
            //grab name of button
            var p = $(this).data('name');
            //pulls gifs from gip
            var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + p + "&api_key=dc6zaTOxFJmzC&limit=10";
            $.ajax({
                url: queryURL,
                method: 'GET'
            })

            //when done, run this function on results adds the gifs pulled from giphy...had a lot of help from a friend with this part
            .done(function(response) {

                var results = response.data;

                //checks to see that api pulled results
                console.log(response);

                //for loop for results
                for (var i = 0; i < results.length; i++) {

                    //
                    //vars for gifs and ratings
                    var gifDiv = $('<div class="item">');
                    var rating = results[i].rating;
                    var p = $('<p>').text("Rating: " + rating);
                    var img = $('<img>');

                    //sets gifs
                    img.attr('src', results[i].images.fixed_height.url);
                    img.attr('data-still', results[i].images.fixed_height_still.url);
                    img.attr('data-animate', results[i].images.fixed_height.url);
                    img.attr('data-state', 'still');
                    img.attr('class', "gifImages");

                    //sends results givs appear here
                    gifDiv.append(p);
                    gifDiv.append(img);
                    $('#gifsAppearHere').prepend(gifDiv);

                   

                }

            });
        });
    }