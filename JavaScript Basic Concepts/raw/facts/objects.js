// 1. Create an empty object
let emptyObj={};
console.log(emptyObj);
console.log("\n");

//2. Create an object
let obj = {
    firstName: "Sakshi",
    lastName: "Rastogi",
    address: {
        city:"New Delhi",
        state:"Delhi"
    },
    age:20,
    movies:["Civil War","First Avenger","Age Of Ultrons"],
    sayHi:function(){
        console.log("HELLO");
        return "blessing";
    }

}

//3. Access keys in objects

// To access address key of object obj
console.log("Address Object"+ obj); //prints Object[object Object]
console.log("Address Object :-",obj.address);  //return the content of address object
console.log(obj.address); //return the content of address object
console.log("\n");
// To access the city key of address in object obj
console.log("City Key"+obj.address.city);
console.log("\n");
// To access function "saysHi" of object obj
console.log("Function Say Hi"+obj.sayHi());  //prints Function Say Hi blessing
// If sayHi() func does not return anythng then in statement 34 it will print Function Say Hi undefined.
console.log("\n");

// 4. The loop will never end hence nothing will get printed
function sayHello(){
    while(true){

    }
    return "hello";
}

// console.log("Say Hello -> "+sayHello()); //the function keeps on running

// 5. Returns undefined
function sayHey(){
    console.log("Good Morning");
}

console.log("Say Hey -> "+sayHey()); //prints undefined as nothing is returned.


//6. Make changes in object 
let newObj = {
    firstName: "Sakshi",
    lastName: "Rastogi",
    address: {
        city:"New Delhi",
        state:"Delhi"
    },
    age:20,
    movies:["Civil War","First Avenger","Age Of Ultrons"],
    sayHi:function(){
        console.log("HELLO");
        return "blessing";
    }

}

//Set object
newObj["friends"]=["Peter","Thor","Tony"];
console.log(newObj);

//Update Object
newObj["age"]=36;
console.log(newObj);

//Delete a key
delete newObj.movies;
console.log(newObj);

//For in loop
for(let key in newObj){
    console.log("Key -> "+key+", value -> "+newObj[key]);
}

//Number of keys in object
console.log(Object.keys(newObj).length);


//Update state in address
let key="address";
newObj[key]["state"]="Chennai";
console.log(newObj);


