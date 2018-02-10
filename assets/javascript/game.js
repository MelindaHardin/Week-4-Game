

//alert("Your score is: " + score + " points.");
var score = 0;
var randomNumber=Math.floor(Math.random()*120)+19;
var crystalValuesData=Math.floor(Math.random()*12) +1;
var wins= 1;
var losses= 1;


$("#random-number").text(randomNumber);

//$(".crystal").on("click", function(){
    //assignValue () 
//});

$("#sapphire").on("click", function(){
    assignValue () 
    crystalValues=$(this).attr("crystalValuesData");
});

$("#RedGem").on("click", function(){
    assignValue () 
    crystalValues=$(this).attr("crystalValuesData");
});

$("#Peridot").on("click", function(){
    assignValue () 
    crystalValues=$(this).attr("crystalValuesData");
});

$("#Amethyst").on("click", function(){
    assignValue () 
    crystalValues=$(this).attr("crystalValuesData");
});


function assignValue (){

    //crystalValues=$(this).attr("crystalValuesData");
    score+=crystalValuesData;
    $("#total-score").text(score);

        if(score === randomNumber){
            alert("YOU WIN!");
            $("#wins").text(wins++);
            score=0;
        }

        else if (score > randomNumber){
            alert ("Too high!");
            $("#losses").text(losses++);
                        
        }
}







    




