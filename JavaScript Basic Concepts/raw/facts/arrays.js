//1. Arrays
let arr=[1,1.1,"String",null, true, {name:"Sakshi"}, [1,2,3,4,5], function sayHi(){
    console.log("HELLO");
    return "Bye";
}];

console.log(typeof arr);
console.log(arr[3]);
console.log(arr[5]);
console.log(arr[5].name);
console.log(arr[7]);
console.log(arr[7]());   //Function is called
console.log("\n");

//2. Using for loop print all elements of Array
for(let i=0;i<arr.length;i++){
    console.log(i," ",arr[i]);
}
console.log("\n");

//3. Update the value of any index in array
arr[0]=2;
for(let key in arr){
    console.log("key :"+key+"| value "+arr[key]);
}
console.log("\n");

//4. array.length != actual length
arr[15]="15th val";
console.log(arr);
console.log(arr.length);   //array.length=16 but actual length is 8 as 7 items are empty.
console.log(arr[9]);       //empty items have value undefined
arr["invalid"]="Some value"; //Since array behave like an object, we can store a key:valuePair.
console.log(arr);
console.log("\n");

//5. Constant Array
const arr1=[1,2,3,4,5];
// arr1=[10,20,30,40,50];  Error :- Assignment to a constant variable

//6. Add an element to front
arr1.unshift(0);  //Add 0 at front
console.log(arr1);
console.log("\n");

//7. Remove last element
arr1.pop();
console.log(arr1);
console.log("\n");

//8. Add an element at last
arr1.push(10);
console.log(arr1);
console.log("\n");

//9. Remove an element from front
arr1.shift();
console.log(arr1);
console.log("\n");

//10. Slicing in array (Do not change original array)
let sliced=arr1.slice(2,4); //Actual array does not get changed
console.log(sliced);
console.log("\n");

//11. Slpicing in Array (Changes Original Array)
let spliced=arr1.splice(2,2);  //first 2 denotes the index, second 2 denotes how many items to delete.
console.log(spliced);
console.log("\n");

//12. Split an Array
let string="Hello! How Are you?";
let split=string.split(" ");
console.log(split);
console.log("\n");

//13. Join in array
let stringArr=["Hello", "Hi", "How"];
let result=stringArr.join("-");
console.log(result);
console.log("\n");