// 1. Print Statement
console.log("HELLO!!");

//2. Declare a variable and print its value.
let a;
console.log(a);  //Default value of a is undefined.

console.log("```````````````````````````````````````````````````");

//3. Javascript is a dynamically typed language.
let b;
console.log("VALUE =>"+b);
console.log("TYPE =>"+typeof b);
console.log("\n");

b=10;
console.log("VALUE =>"+b);
console.log("TYPE =>"+typeof b);
console.log("\n");
b=10.05;
console.log("VALUE =>"+b);
console.log("TYPE =>"+typeof b);
console.log("\n");
b="HI";
console.log("VALUE =>"+b);
console.log("TYPE =>"+typeof b);
console.log("\n");
b="Hello";
console.log("VALUE =>"+b);
console.log("TYPE =>"+typeof b);
console.log("\n");
b=true;
console.log("VALUE =>"+b);
console.log("TYPE =>"+typeof b);
console.log("\n");
b=null;
console.log("VALUE =>"+b);
console.log("TYPE =>"+typeof b);
console.log("\n");



//5. NAN
console.log("If it does not give a number => "+1/"Hello"+"\n");   //Since 1/"Hello" does not give a number, therefore it will print NaN

//6. How to join a string with a number while printing a message?
console.log("My age is "+21+"\n"); 

//7. Division by 0
console.log(1/0); //prints infinity