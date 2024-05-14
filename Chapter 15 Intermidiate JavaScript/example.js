
// -------------------------------------------------------------------------

// random number - Math.random() - (0 - 0.99999999999999999 )
// name.includes(x)

// -------------------------------------------------------------------------

// Dice 1-6

var n = Math.random() // 0 - 0.99999999999999999
n = n*6
n = Math.floor(n) + 1
console.log(n)

// -------------------------------------------------------------------------

// love calculator

var firstName = prompt("What is your name?");
var secondName = prompt("What is your lovers name?");

var randomNum = Math.floor((Math.random()*100)+1);

alert(randomNum);


// -------------------------------------------------------------------------

// if statement

if (xyz === clear) {
    console.log();
} else {
    console.log();
}

if (randomNum > 70) {
    alert("You guys are soulmates");
} else {
    alert("You guys are not a good match beacasue your love score is "+randomNum);
}

// -------------------------------------------------------------------------

// conditions & else if

// ===  is equal and data types match
// == is equalt and data type not match
// && and
// || Or
// ! not

function bmiCalculator (weight, height) {
    
    var bmi  = weight/(height*height);
    
    var statement = "Your BMI is " + bmi;
    
    if (bmi < 18.5) {
        return (statement + ", so you are underweight.");
    } else if (bmi < 24.9) {
        return (statement + ", so you have a normal weight.");
    } else {
        return (statement + ", so you are overweight.")
    }
        
}

// -------------------------------------------------------------------------

// leap year

function isLeap(year) {
    
    /**************Don't change the code above****************/    
        
        //Write your code here.    
    
        var isLeap = false;
        
        if ((year%4) == 0) {
            isLeap = true;
        }
        
        if (((year%100) != 0) && ((year%400)==0)){
            isLeap = true;
        }
        
        if (isLeap) {
            return "Leap year.";
        } else {
            return "Not leap year.";
        }
        
    
    /**************Don't change the code below****************/    
    
}

// -------------------------------------------------------------------------

// list

var guest = ["ironman", "tom", "hank"];

var guestName = prompt("Whats your name?").toLowerCase();

if (guest.includes(guestName)) {
    alert("Welcome");
} else {
    alert("Bye bye");
}


// -------------------------------------------------------------------------

// fizzbuzz

var output = [];
var num = 0;

function fizzBuzz() {
    num += 1;

    if (num % 3 == 0 && num % 5 == 0 ) {
        output.push("FizzBuzz");
    } else if (num % 3 == 0) {
        output.push("Fizz");
    } else if (num % 5 == 0) {
        output.push("Buzz");
    } else {
        output.push(num);
    }
    
    console.log(output);
}


// -------------------------------------------------------------------------


// Who's Buying Lunch? Code Challenge
// You are going to write a function which will select a random name from a list of names. 
// The person selected will have to pay for everybody's food bill.

// Important: The output should e returned from the function and you do not need alert,
// prompt or console.log. The output should match the example output exactly, including capitalisation and punctuation.

// Example Input

// ["Angela", "Ben", "Jenny", "Michael", "Chloe"]

// Example Output

// Michael is going to buy lunch today!

function whosPaying(names) {
    
    /******Don't change the code above*******/
        
        //Write your code here.
        
        var nameCount = names.length;
        
        var randomPerson = Math.floor(Math.random()*nameCount);
        
        randomPerson = names[randomPerson];
        
        return (randomPerson + " is going to buy lunch today!");
    
    
    /******Don't change the code below*******/    
}



// -------------------------------------------------------------------------

// while loop

// fizzbuzz

var output = [];
var num = 0;

function fizzBuzz() {
    

    var i = 1;

    while  (i<=100) {
        
        num += 1;
        
        if (num % 3 == 0 && num % 5 == 0 ) {
            output.push("FizzBuzz");
        } else if (num % 3 == 0) {
            output.push("Fizz");
        } else if (num % 5 == 0) {
            output.push("Buzz");
        } else {
            output.push(num);
        }
        
        i++;
    }

    console.log(output);
    
}

// -------------------------------------------------------------------------

// 99 bottles of cola on the wall

function Cola() {

    var colaBottlesOnWall = 99;
    
    while (colaBottlesOnWall >= 1) {

        colaBottlesOnWall--;

        console.log( (colaBottlesOnWall + 1 )+ " bottles on wall, " + (colaBottlesOnWall + 1) + 
        " bottles of cola." + " Take down one and pass it around, " + colaBottlesOnWall + " bottles of cola on the wall."  );
        
    }

    colaBottlesOnWall = 99;

    console.log("No more cola bottles one wall, No more bottles of cola. Go to store and buy some more, " 
    + colaBottlesOnWall + " bottles of cola on the wall." );

}


// -------------------------------------------------------------------------

// for loop

// fizzbuzz

var output = [];
var num = 0;

function fizzBuzz() {
    

    for (var i = 1; i <= 100; i++) {
        
        num += 1;
        
        if (num % 3 == 0 && num % 5 == 0 ) {
            output.push("FizzBuzz");
        } else if (num % 3 == 0) {
            output.push("Fizz");
        } else if (num % 5 == 0) {
            output.push("Buzz");
        } else {
            output.push(num);
        }

    }

    console.log(output);
    
}

// -------------------------------------------------------------------------

// fibonacchi

function fibonacciGenerator (n) {

    //Do NOT change any of the code above 👆
        
        //Write your code here:
        
        var fibArray = [];
        var currentNum = 0;     // 0 1 1 2 
        var previousNum = 0;    // 0 0 1 2
        
        for (var i = 0; i < n; i ++) {
            
        
        if (i == 0) {
            fibArray.push(currentNum);
        }
        
        else if (i == 1) {
            currentNum = 1;
            fibArray.push(currentNum);
        }
        
        else if (i == 2) {
            currentNum = 1;
            previousNum = 1;
            fibArray.push(currentNum);
        }
        
        else {
            
            var x = currentNum;
            
            currentNum += previousNum;
            
            fibArray.push(currentNum);
                
            previousNum = x;
            
        }
        
        }
        
        return fibArray;
        
        
        
        //Return an array of fibonacci numbers starting from 0.
        
    //Do NOT change any of the code below 👇
    }
    
// -------------------------------------------------------------------------