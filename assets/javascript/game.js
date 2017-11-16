        var guess_array= [50,64,88,76];
        var guessAmount = guess_array[Math.round((guess_array.length-1)*(Math.random()))];

        $("#magicNumber").text(guessAmount);

        var counter=0;

        var numberOptions = [6,8,10,14];

        for (var i = 0; i < numberOptions.length; i++) {

        }
            
            var crystal = $("<img>");

            crystal.addClass("crystal-image");

            crystal.attr("src", "assets/images/purplecrystal.png");

            crystal.attr("data", numberOptions[i]);

            $(".first").append(crystal);

            var crystal = $("<img>");

            crystal.addClass("crystal-image");

            crystal.attr("src", "assets/images/greencrystal.png");

            crystal.attr("data", numberOptions[i]);

            $(".first").append(crystal);

            var crystal = $("<img>");

            crystal.addClass("crystal-image");

            crystal.attr("src", "assets/images/redcrystal.png");

            crystal.attr("data", numberOptions[i]);

            $(".second").append(crystal);

            var crystal = $("<img>");

            crystal.addClass("crystal-image");

            crystal.attr("src", "assets/images/bluecrystal.png");

            crystal.attr("data", numberOptions[i]);

            $(".second").append(crystal);

        //  var increment = numberOptions[Math.round(Math.random())];

            var wins=0;
            var losses=0;

        $(".crystal-image").on("click", function() {

            var crystalValue = ($(this).attr("data"));
            crystalValue = parseInt(crystalValue);

            //counter += crystalValue;
            counter += numberOptions[Math.round((numberOptions.length-1)*(Math.random()))];
            $("#magicAccquired").text(counter);

            if (counter === guessAmount) {
                alert("You Win!");
                var wins = +1;
                $("#wins1").text(wins);
                $(".mickey").attr("src", "assets/images/MickeywithHat.png");
            }

            else if (counter >= guessAmount) {
                alert("You Lose!");
                var losses = +1;  
                $("#losses1").text(losses);
                $(".mickey").attr("src", "assets/images/MickeynoHat.png");
            }
        });
    