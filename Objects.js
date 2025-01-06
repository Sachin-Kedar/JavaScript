/* 
Object Literals

const mySym = Symbol("myKey") 
// Symbol is a data type and this is how we define it.

const jsUser={
    name:"Sachin",
    "full Name": "Sachin Kedar",
    [mySym]:"mykey1",
    age: 18,
    Gender: "Male",
    location:"Pune",
    email:"bc12@gmail.com"
 
}

console.log(jsUser.name)
console.log(jsUser["name"])
// Both ways are correct but for key like "full name" we can't use 1st way
// Thats why 2nd way is more efficient.

console.log(jsUser["full Name"])

//  We can Freeze an Object:
//Object.freeze(jsUser);

// Adding Function in an Object

jsUser.greeting= function(){
    console.log("Hello Sir");
}
console.log(jsUser.greeting());

jsUser.greeting1= function(){
    console.log(`Hello Sir ,${this.age}` );
}
let x= jsUser.greeting1();
console.log(x);

*/


