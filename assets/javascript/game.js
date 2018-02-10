


var counter = 0;
var randomNumber=Math.floor(Math.random()*120)+19;

function assignValue (){
    var crystalValues=Math.floor(Math.random()*12) +1;
        counter+=crystalValues;

        alert("Your score is: " + counter + " points.");

        if(counter === randomNumber){
            alert("YOU WIN!")
        }

        else if (counter > randomNumber){
            alert ("Too high!")
        }
}



$("#random-number").text(randomNumber);
$("#total-score").text(counter);


    $("#sapphire").on("click", function(){

        assignValue () 
    });

    $("#RedGem").on("click", function(){
        assignValue ()

    });

    $("#Peridot").on("click", function(a){
        assignValue ()

    });

    $("#Amethyst").on("click", function(){
        assignValue ()

    });




