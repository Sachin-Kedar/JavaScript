// Arrays with functions

const myNewArr = [200, 300,400,500]

function return2ndArr (getArr){
    return getArr[1]
}

//console.log(return2ndArr(myNewArr));

// console.log(return2ndArr([200, 300,400,500]))
//        We can write this way alos cause both are same


// Objects with Functions

const user = {
    username : "hitesh",
    price : 399
}

function handleObject(getvalue){
    //console.log(`Username is ${getvalue.username} and Price is ${getvalue.price}`);
    
}

handleObject(user);



// THIS and Arrow Function:

const user1 = {
    username : "hitesh",
    price : 399,
    greet: function(){
        console.log(`${this.username} , welcome to code.`);
        // this keyword we use for current context only. 
        
    } 
}

// user1.greet()
// user1.username = "Sam";
// user1.greet()

//  Normal Function
const chai = function(){
    console.log("This is Normal Function");
    
}
//chai()

//  Arrew Functions
const chai1 = ()=> {
    console.log("This is Arrow Function");
    
}
//chai1()

// Another Example
const addTwo =(num1 , num2) =>{
    return num1+num2
}
console.log( addTwo(5,6)); //11

/*
Note: 
    Implicit Return:
        Now this same function we can write in one line which is called
        Implicit Return. (we didn't need to use return keyword or braces)
*/

const addTwo1 =(num1 , num2) => num1+num2
// const addTwo1 =(num1 , num2) => (num1+num2)
// This is also the same as above function
console.log( addTwo1(5,8)); // 13
