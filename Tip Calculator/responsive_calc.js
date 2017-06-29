//////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////// Calculator /////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
// Problem you cannot add, subract, multiple, or divide without pressing equals button
// multiple times. Might be fixable for one iteration if boolean is made with calc2()
// bening set to false in an if statement within calc1(). Then after the equals sign 
// is hit set the boolean to false automatically for multiple iterations. Thats too
// much work for me. I made a calculator so... that's enough work for the moment on this.
// You cant negate the number
// The third problem relates to the display function not displaying the numbers as you type them.
// should also be an easy fix.
// problem four relates to if you enter a number and then hit calculate, it doesnt do it
// another easy fix

var arrayMan = [];

//////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////// Real Time Entry ///////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
$('#input1').keyup(function () {
  $('#display').text($(this).val());
});
$(document).ready(function(){
    //First and Last
    alert("I am an alert box!");
}); 
//////////////////////////////////////////////////////////////////////////////////////
////////////////// Displaying the numbers when the button is clicked /////////////////
//////////////////////////////////////////////////////////////////////////////////////
function dis1(in1){
    
////// Takes the arguement given by the button and proceeds to execute the following code /////
    switch(in1){
    case 0:
        document.getElementById("input1").value += 0;// changes value of text box to number
        document.getElementById("display").innerHTML += 0;
        break;
    case 1:
        document.getElementById("input1").value += 1;
        document.getElementById("display").innerHTML += 1;
        break;
    case 2:
        document.getElementById("input1").value += 2;
        document.getElementById("display").innerHTML += 2;
        break;
    case 3:
        document.getElementById("input1").value += 3;
        document.getElementById("display").innerHTML += 3;
        break;
    case 4:
        document.getElementById("input1").value += 4;
        document.getElementById("display").innerHTML += 4;
        break;
    case 5:
        document.getElementById("input1").value += 5;
        document.getElementById("display").innerHTML += 5;
        break;
    case 6:
        document.getElementById("input1").value += 6;
        document.getElementById("display").innerHTML += 6;
        break;
    case 7:
        document.getElementById("input1").value += 7;
        document.getElementById("display").innerHTML += 7;
        break;
    case 8:
        document.getElementById("input1").value += 8;
        document.getElementById("display").innerHTML += 8;
        break;
    case 9:
        document.getElementById("input1").value += 9;
        document.getElementById("display").innerHTML += 9;
        break;
    case 10:
        document.getElementById("input1").value += ".";
        document.getElementById("display").innerHTML += ".";
        break;
    default:
        document.getElementById("input1").value = "Invalid Button"; //people messing with my code
        document.getElementById("display").innerHTML = "Invalid Button ";
            
    }
}
//////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////// Negative Number //////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
function neg(){
    number1 = parseFloat(document.getElementById("input1").value);
    number2 = -number1;
    document.getElementById("input1").value = number2;
    document.getElementById("display").innerHTML = number2;

}
//////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////// Clear function ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
function clear1(){
    document.getElementById("display").innerHTML = "";
    document.getElementById("input1").value = "";
    in1 = 0;
    number1 = 0;
    number2 = 0;
}
//////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Operation and Number Storage ///////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
function calc1(num4){
    num1 = parseFloat(document.getElementById("input1").value); //gets the first number in text box hi and stores it as a global scope
    document.getElementById("input1").value = ""; // clears the text box for the user
    /////////////////////////////// Operation  Selector/////////////////////////////////////
    switch(num4){
        
    case 0:
        operation = 0; // operation selector as global scope
        num1 = parseFloat(document.getElementById("display").innerHTML);
        document.getElementById("display").innerHTML = "";
        document.getElementById("input1").value = "";
        arrayMan[0
        break;
    case 1:
        operation = 1;
        num1 = parseFloat(document.getElementById("display").innerHTML);
        document.getElementById("display").innerHTML = "";
        document.getElementById("input1").value = "";
        
        break;
    case 2:
        operation = 2;
        num1 = parseFloat(document.getElementById("display").innerHTML);
        document.getElementById("display").innerHTML = "";
        document.getElementById("input1").value = "";
        
        break;
    case 3:
        operation = 3;
        num1 = parseFloat(document.getElementById("display").innerHTML);
        document.getElementById("display").innerHTML = "";
        document.getElementById("input1").value = "";
        
        break;
    default:
        
    }    
}
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////// Calculations ////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
function calc2(){
 /////////////////////////////// Operation  Performer ///////////////////////////////////// 
    if (operation === 0){
        num2 = parseFloat(document.getElementById("input1").value); // recieves number 2
        finalAnswer = num1 + num2; // performs operation
        document.getElementById("text-box").innerHTML += num2 + " = " + finalAnswer; // displas results
        document.getElementById("input1").value = finalAnswer; // puts answer in text box for next calculation
    
    } else if (operation === 1){
        num2 = parseFloat(document.getElementById("input1").value); //
        finalAnswer = num1 - num2;
        document.getElementById("text-box").innerHTML += num2 + " = " + finalAnswer;
        document.getElementById("input1").value = finalAnswer;
    } else if (operation === 2){
        num2 = parseFloat(document.getElementById("input1").value); //
        finalAnswer = num1 * num2;
        document.getElementById("text-box").innerHTML += num2 + " = " + finalAnswer;
        document.getElementById("input1").value = finalAnswer;
    } else if (operation === 3){
        num2 = parseFloat(document.getElementById("input1").value); //
        finalAnswer = num1 / num2;
        document.getElementById("text-box").innerHTML += num2 + " = " + finalAnswer;
        document.getElementById("input1").value = finalAnswer;
    } else {
        document.getElementById("text-box").innerHTML ="Stop breaking my calculator!";
    }
}