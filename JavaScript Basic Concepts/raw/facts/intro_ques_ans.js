// ************************************* DIRECTORY INFO ****************************************************

//Facts Folder => contain information related to features that we are using in the activity.
//POC Folder => contain information related to framework that we are using in the activity.

// ************************************* BASIC JAVASCRIPT ***************************************************

/* Q1. How code runs in JS?
   Ans. Code runs in JS from top -> bottom and left -> right

   Q2. Do JS code have main function?
   Ans. No, JS code does not contain main function

   Q3. How to print in JS?
   Ans. Using console.log("Your text");    Print Statement

   Q4. How to declare a variable in JS?
   Ans. let a;
        var a;
        const a;
        Note :- Once we declare a variable, it will contain a default value i.e. undefined. 

   Q5. How to run JS file in console?
   Ans. node nameOfFile  => example:- node introduction.js

   Q6. Name the primitive data types present in JS?
   Ans. Number,Boolean,String,Null,Undefined

   Q7. Why Java is said to be statistically typed language whereas Javascript is said to be dynamically typed language?
   Ans. In javascript, we declare a variable using either var, let or const. Once declared, we can store value of any datatype (i.e. null, undefined, number, string, boolean) in it.
        In java, we declare a variable using either int,char, float,double, boolean etc. and therefore can store specific values only (i.e a veriable declared with int can store integer values only, a variable declared with float can store float values only etc.).

   Q8. What is the name of developer of JavaScript?
   Ans. Brenden Eich

   Note :- i)   JavaScript Syntax is similar to Java.
           ii)  Brenden Eich created a browser named Netscape.
           iii) JavaScript is a case sensitive language.
           iv)  Indentation is not an issue in JS.
           v)   Math.random() generate a random value between 0 and 1.

   Q9. How to join a string with a number while printing a message?
   Ans. Use "+" operator instead of ",".
        Example :- console.log("My age is "+21);  //It will print My age is 21.

   Q10. List the non primitive data types.
   Ans. Functions, Arrays, Objects

// ************************************* FUNCTIONS *********************************************************


   Q11. Important points related to functions.
   Ans. 1) Functions do not have a return type.
        2) Function parameters do not have a return type
        3) Don't put "let" keyword before a parameter, because we declare only variables.
        4) We can return only one value from a function.
        5) typeof functionname is a function.
        6) console.log(functionname) -> it will print functions body

// ******************************************* ARRAYS *********************************************************

   Q12. Important points related to Arrays.
   Ans. Arrays in JS is similar to ArrayList in Java whose size is not defined i.e. it is dynamic.

   Q13. How arrays are declared in JS?
   Ans. let arr=[];

   Q14. How arrays in Java different from arrays in JS?
   Ans. Arrays in Java is a collection of homogenous data types.
        Arrays in JS is a collection of any datatype.

   Notes :- 1) typeof arrayName is object.
            2) Array is an object (internally)
            3) array.length != actual length {Adapter Design Pattern}
            4) array is contiguous (i.e. elements of array are stored in a continuous mermory) whereas object is not contiguous (i.e. elements of object may or may not be stored in a continuous mermory).
            5) empty arr :- let arr=[];

// ****************************************** OBJECTS *********************************************************
  
   Notes :- 1)Empty object :- let obj= {};
            2)You can access the properties/keys of an object using "."(dot) and "[]" square brackets.
            3)In loops, always access values using square brackets
            4)Other than loops, you can use either "." or "[]" to access values of a particular key.
            5)If key that you are accessing is not present, it will print undefined.
            6)If key has value (characteristics of object) in object, then it is a property.
            7)If key has function (behaviour of object) as value in object, then it is called method.

   Q15. What are objects?
   Ans. Objects are similar to dictionary in python. Data in objects is stored in the form of key-value pair


   Q16. How console.log() func will work in below example?
        console.log("Function Say Hi"+obj.sayHi()); 
   Ans. First, sayHi() function will be called, and after it returns some value then only console.log() will be called.

   Note :- 1) console.log() is also a function consisting of 2 parameters -> Function Say Hi (text) and obj.sayHi().
                 a)If the function returns something it will print it. 
                 b)If the function body consists of infinite loop (as shown in objects.js file (point 4)), it will keep on running. 
                 c)If the function does not return anything it will print undefined.
        
*/