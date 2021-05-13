//Reference :- https://www.freecodecamp.org/news/how-javascript-implements-oop/

// 1. Object Example
let names = {
    fname: "Dillion",
    lname: "Megida"
}
console.log(names.fname);  //Dillion
console.log(names.hasOwnProperty("mname"));  //false because names object does not contain any property named mname.
console.log("\n");
/*
Q1. Where does hasOwnProperty come from?
Ans. 1. It comes from the Object prototype. When you print object (names), the ouptut is shown in fig console.log(names).png.
     2. It consists of __proto__ property. If you expand the proto property, the output is shown in expand_proto.png.
     3. You'll see a set of properties under the Object constructor. All these properties are coming from the global 
        Object prototype. If you look closely, you'll also notice our hidden hasOwnProperty .
     4. In other words, all objects have access to the Object's prototype. They do not possess these properties, 
        but are granted access to the properties in the prototype.

Q2. What is __proto__ property?
Ans. This points to the object which is used as a prototype.
     This is the property on every object that gives it access to the Object prototype property.

Q3. Can we modify the proto property?
Ans. Yes, we can by referring ito to another object prototype.

Q4. ECMAScript is a class-based Oops?
Ans JavaScript introduced the class keyword in ECMAScript 2015. It makes JavaScript seem like an OOP language. 
    But it is just syntatic sugar over the existing prototyping technique. It continues its prototyping in the 
    background but makes the outer body look like OOP.
*/




