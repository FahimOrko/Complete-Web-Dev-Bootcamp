
// ------------------------------------------------------------------------

// prromt is like input and used in for the web
// name.lenght - for finding lenght / count
// alert - is for windom print
// name.slice(x,y) - for slicing
// Math.floor(x) - for floor division
// Math.round(x) - for rouding number


// ------------------------------------------------------------------------


alert("Hello");
alert("World");
window.alert("Hello World");
prompt("What is your name");
var name = "Orko";
alert(name)

var myName = prompt("What is your name?");
alert(myName+" is a bokachoda but nur alam is bigger bokachoda");
alert(typeof(myName));


// ------------------------------------------------------------------------

function test() {
    var a = "3";
    var b = "8";
    
/***********Do not change the code above 👆*******/
//Write your code on lines 7 - 9:
    
    var c = a;
    var a = b;
    var b = c;

    
/***********Do not change the code below 👇*******/

    console.log("a is " + a);
    console.log("b is " + b);
}

// -------------------------------------------------------------------------

function test() {
    
    var a = prompt()
    var numberOfChararachter = 240;

    alert("The number of charater is " + a.length + " and the number of char left is - " + (numberOfChararachter - a.length) )
    
}

test()


// -------------------------------------------------------------------------


alert(prompt("Write your tweet: ").slice(0,140));


// -------------------------------------------------------------------------


// toUpperCase()
// toLowerCase()

alert(prompt("Write your first name- ").toUpperCase());
alert(prompt("Write your last name- ").toLowerCase());


// -------------------------------------------------------------------------


name.slice(x,y)


// -------------------------------------------------------------------------

// Karnel the robot

/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/

function main(){
    threeBeeper();
    turnLeftMoveUp();
    twoBeeper();
    turnRightMoveUp();
    threeBeeper();
    turnLeftMoveUp();
    twoBeeper();
    turnRightMoveUp();
    threeBeeper();
 }
 
 
 function threeBeeper(){
    putBeeper();
    move();
    move();
    putBeeper();
    move();
    move();
    putBeeper();
 }
 
 function twoBeeper(){
    move();
    putBeeper();
    move();
    move();
    putBeeper();
    move();
 }
 
 function turnLeftMoveUp(){
    turnLeft();
    move();
    turnLeft();
 }
 
 function turnRightMoveUp(){
    turnRight();
    move();
    turnRight();
 }
  

// -------------------------------------------------------------------------


Math.floor()  //-- for doing floor division


// -------------------------------------------------------------------------

// BMI calculator

function bmiCalculator(weight,height) {
    
    var bmi = weight/(height*height);
    
    return Math.round(bmi);
    
}

alert(bmiCalculator(prompt("Enter your height: "), prompt("Enter your weight: ")));


// -------------------------------------------------------------------------

