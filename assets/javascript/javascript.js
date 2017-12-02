
		//create buttons at top

		$(document).ready(function(){


			var animalsarray = ["cats", "dogs", "elephants", "monkeys", "skunks"];


			function buttongenerator() {
				for (var i = 0; i < animalsarray.length; i++ {

					var name = animalsarray[i];
					var button = $('<buttons>');
					button.addClass("gif-button");
					button.text(name);
					button.attr("data-name", name);


					$("#buttons").append(button);
				
			}

		}

		buttongenerator();

		//create results when click on 

		$(document).on("click"), ".gif-button, function() {
			
		}