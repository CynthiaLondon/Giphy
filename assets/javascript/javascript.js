var topics = ["Rabbits", "Koala", "Mouse"];
    function renderButtons() {
        $('#startingButtons').empty();
        for (i = 0; i < topics.length; i++) {
            var a = $('<button>');
            a.addClass('#topic');
            a.addClass('btn btn-primary')
            a.attr('data-name', topics[i]);
            a.text(topics[i]);
            $('#startingButtons').append(a);
        }
        addGif();
    }
    //adding gify buttons from user input
    $('#grabUserInput').on('click', function() {
        var gify = $('#user-Input').val().trim();
        topics.push(gify);
        renderButtons();
        $('#user-Input').val("");
        return false;
    });
    renderButtons();
    function addGif() {
        $('button').on("click", function() {
            var p = $(this).data('name');
            var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + p + "&api_key=dc6zaTOxFJmzC&limit=10";
            $.ajax({
                url: queryURL,
                method: 'GET'
            })
            .done(function(response) {
                var results = response.data;
                console.log(response);
                for (var i = 0; i < results.length; i++) {
                    var gifDiv = $('<div class="item">');
                    var rating = results[i].rating;
                    var p = $('<p>').text("Rating: " + rating);
                    var img = $('<img>');
                    img.attr('src', results[i].images.fixed_height.url);
                    img.attr('data-still', results[i].images.fixed_height_still.url);
                    img.attr('data-animate', results[i].images.fixed_height.url);
                    img.attr('data-state', 'still');
                    img.attr('class', "gifImages");
                    gifDiv.append(p);
                    gifDiv.append(img);
                    $('#gifsAppearHere').prepend(gifDiv);
                }
                $('.item').children('img').on('click', function() {
                    var state = $(this).attr('data-state');
                    if (state == 'still') {
                        $(this).attr('src', $(this).data('animate'));
                        $(this).attr('data-state', 'animate');
                    } else {
                        $(this).attr('src', $(this).data('still'));
                        $(this).attr('data-state', 'still');
                    }
                });
            });
        });
    }