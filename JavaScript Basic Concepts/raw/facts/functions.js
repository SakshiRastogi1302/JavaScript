//1. Functions
function func1(param){
    console.log("Hii"+param);
}
func1("Sakshi");
console.log("\n");
console.log(typeof func1);

//2. Functions With A Return Statement (Part 1)
function func2(param){
    console.log("Hola"+param);
    return "Return Value";
}

func2("Tree"); //Not storing the returned value of a function
let val1=func2("Tree"); //Storing the returned value of a function
console.log(val1);
console.log("\n");

//3. Functions With A Return Statement (Part 2)
function func3(param){
    let rVal=Math.random()<0.5?"good":false;
    return rVal;
}

func3("ABC"); //Not storing the returned value of a function
let val2=func3("Tree"); //Storing the returned value of a function
console.log(val2);
console.log("\n");

//4. Function Without A Return Statement 
function func4(param){
    console.log("HELLO",param);
    console.log(typeof param);
}


func4("ABC"); //Not storing the returned value of a function
let val3=func4("Tree"); //Storing the returned value of a function 
console.log(val3); //prints undefined as the function does not return anything.
console.log("\n");
