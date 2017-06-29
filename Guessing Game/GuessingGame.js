//Numbers that the player guesses
var numOne;
var numTwo;
var numThree;
//Randomly chosen numbers (solution)
var ansOne = genRandom();
var ansTwo;
var ansThree;
//Tries counter;
var tries = 10;


//do while loop
//Executes the code once, then repeats if the condition is met
do{
  ansTwo = genRandom();
} while(ansTwo == ansOne);
do{
  ansThree = genRandom();
} while(ansThree == ansOne || ansThree == ansTwo)

  //function check(){
  $(document).ready(function(){
    $("#check").click(function(){


   // })


    //Store the guesses in our variables
    // numOne = document.getElementById("num1").value;
    numOne = $("#num1").val();
    //numTwo = document.getElementById("num2").value;
    numTwo = $("#num2").val();
    //numThree = document.getElementById("num3").value;
    numThree = $("#num3").val();
      
    console.log(ansOne, ansTwo, ansThree);
    if(numOne == ansOne){  //Only two equal signs beause .value returns a string and our random numbers are integers
      changeColor("num1", "green");//id, color
    } else if(numOne == ansTwo || numOne == ansThree){
      changeColor("num1", "yellow");
    } else{changeColor("num1", "red")};

    if(numTwo == ansTwo){  //Only two equal signs beause .value returns a string and our random numbers are integers
      changeColor("num2", "green");//id, color
    } else if(numTwo == ansOne || numTwo == ansThree){
      changeColor("num2", "yellow");
    } else{changeColor("num2", "red")};

    if(numThree == ansThree){  //Only two equal signs beause .value returns a string and our random numbers are integers
      changeColor("num3", "green");//id, color
    } else if(numThree == ansTwo || numThree == ansOne){
      changeColor("num3", "yellow");
    } else{changeColor("num3", "red")};


    if(numOne == ansOne && numTwo == ansTwo && numThree == ansThree)
    {
     // var winField = document.getElementById("win-lose");
     // winField.innerHTML = "YOU WIN!";
      changeText("win-lose", "You Win!!");
      return;
    }

    tries = tries -1;
    //var triesField = document.getElementById("tries");
    //triesField.innerHTML = "You have " + tries + " tries left.";
     changeText("tries", "You have " + tries + " tries left");

    if(tries <= 0){
      //changeText("win", "YOU LOSE!");
      //var winField = document.getElementById("win-lose");
     // winField.innerHTML = "YOU LOSE!";
      changeText("win-lose", "You Lose!");
      //document.getElementById("win-lose").style.color = "red";
      $("#win-lose").css("color", "red");
    }
    });
});
//}


function changeColor(id, color){
  //document.getElementById(id).style.backgroundColor = color;
    $("#"+id).css("background-color", color);
}

function changeText(id, text){
  //document.getElementById(id).innerHTML = text;
  $("#"+id).text(text);
}

function genRandom(){
  //Math.random() <-- returns a random decimal between 0 and 1(inclusive)
  //0-9 Math.random() 0 - 0.999999999 ->
  var randomNum = Math.random();
  //Get it between 0-09
  randomNum *= 10; //randomNum = randomNum*10; 8.125423
  return Math.floor(randomNum); //Math.floor Chops off all decimals
}

