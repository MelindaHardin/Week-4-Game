

//alert("Your score is: " + counter + " points.");
var counter = 0;
var randomNumber=Math.floor(Math.random()*120)+19;
var wins= 1;
var losses= 1;

function assignValue (){

    var crystalValues=Math.floor(Math.random()*12) +1;
        counter+=crystalValues;
        $("#total-score").text(counter);
        

        if(counter === randomNumber){
            alert("YOU WIN!");
            $("#wins").text(wins++);
        }

        else if (counter > randomNumber){
            alert ("Too high!");
            $("#losses").text(losses++);
        }
}


$("#random-number").text(randomNumber);

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




