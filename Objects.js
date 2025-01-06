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

/*
Singleton Object or Object Constructor

const tinder = new Object();


tinder.id = "123";
tinder.name = "Sam";
tinder.isLoggedIn = false;
// console.log(tinder);


const regulaeUse = {
    email : "abc@gmail.com",
    "Full Name": {
        userFullName: {
            fName:"Amy",
            lName:"Jackson"
        }
    },
    fullname: {
        userFullName: {
            fName:"Sachin",
            lName:"Kedar"
        }
    }
}

console.log(regulaeUse.fullname.userFullName.fName);

console.log(regulaeUse["Full Name"]["userFullName"]["lName"]);

console.log(regulaeUse["Full Name"].userFullName.fName)




// Combining the Objects:

const obj1 = {1:"a",2:"b",3:"c"}

const obj2 = {4:"a",5:"b",6:"c"}

const obj3 = {7:"a",8:"b",9:"c"}


const obj4 = Object.assign({},obj1,obj2,obj3);
// Here 1st parameter is a target in which we'll store all objects
// 2nd parameter is a Source of objects.
// If we don't add epmty object in above syntax it will store object in obj1

// console.log(obj4)
// console.log(obj4===obj1); // false (if added target as empty object)

// Using Spread Operator:

const obj5 = {...obj1, ...obj2,...obj3};
console.log(obj5);

*/

/*
De-structuring of an Object:
*/

const course = {
    cname: "Js",
    price: 999,
    cInstucture: "Hitesh"
}

 