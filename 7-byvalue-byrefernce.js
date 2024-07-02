//by value primitive 

var a =5;
var b;

b=a;

a=10;

console.log('orijinal a value ' + a)
console.log(" copy value " + b)

// call by reference 

const person={
    greeting:"call by reference"
}

var d;

d=person;

d.greeting="now changed call by refernce value"

console.log(d)
console.log(person)


// Call by Value
// When you pass a primitive data type (like a number or a string) to a function in JavaScript, it's passed by value. This means that the function receives a copy of the variable's value, not the variable itself. Any changes made to the parameter inside the function do not affect the original variable outside the function.


let originalval=10;

function incrementval(num){
    num++;
    return num;
  
}

let finalval=incrementval(originalval)
console.log("Increment value " + finalval)
console.log( "Original vale " + originalval)

// call by reference 

const originalarray=[1,2,3,4,5]
function addelement(arr,element){
    arr.push(element)
}
addelement(originalarray,10)
console.log(originalarray)


// call by value
function modifyObject(obj) {
    obj.prop = "modified"; // Modify a property of the object
}

let originalObject = { prop: "original" };
modifyObject(originalObject);

console.log("Original Object:", originalObject);


let originalObject2 = { prop: "original" };

function assignNewObject(obj) {
    obj = { prop: "new object" }; // Assign a new object to the parameter
}


assignNewObject(originalObject2);

console.log("Original Object:", originalObject2);