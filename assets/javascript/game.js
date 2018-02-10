


var counter = 0;
var randomNumber = Math.floor(Math.random()*120)+19;
var crystalValues =Math.floor(Math.random()*12) +1;


$("#random-number").text(randomNumber);


    $("#sapphire").on("click", function(){
        counter+=crystalValues;

        alert("Your score is: " + counter + " points.");

        if(counter === randomNumber){
            alert("YOU WIN!")
        }

        else if (counter > randomNumber){
            alert ("Too high!")
        }

        

    });





