console.log ("hello world - I changed FizzBuzz to CakeWalk");
// Place your FizzBuzz code here. 
// Number sequence is 1-20

//If number is divisible by 3, then "Fizz or Cake"
//If the number is divisible by 5, then "Buzz or Walk."
//If the number is divisible by both 3 and 5, then, "FizzBuzz or CakeWalk."

//using a `for` loop through the sequence of numbers

//this was my first way but didn't work:

/*for (i = 0; i <21; i++) {
  
 if (i % 3 === 0) {
      console.log ("Fizz");
  
  if (i % 5 === 0) {
      console.log ("Buzz");

  if (i % 3 === 0 && i % 5 === 0); {
      console.log ("FizzBuzz");
  }
  }
  }
    
  else { console.log (i);
  }
} 
*/

var divBy3 = "Cake";
var divBy5 = "Walk";

for (i = 1; i <=20; i++) {
  
 if (i % 3 === 0) {
  if (i % 5 === 0) {
      console.log (divBy3 + divBy5);
   } 
  else {
  console.log (divBy3);
  }
  } 
  else if (i % 5 === 0) {
      console.log (divBy5); 
 } 
  else { 
    console.log (i);
  }
  }


  //If number can't be divided by either, then print number 
//elseif is outside the above code block
  
 
//For each number, check these conditions and respond appropriately:
  //If the number is divisible by 3, print "Fizz" to the console.
  //* If the number is divisible by 5, print "Buzz" to the console.
  //* If the number is divisible by **BOTH** 3 and 5, print "FizzBuzz" to the console.
  //* If none of these conditions are met, print the number to the console.
//Use proper variable scope and type definitions 
//Use camelCase and comment your code to indicate functionality in plain language.