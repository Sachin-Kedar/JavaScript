// Arrays with functions

const myNewArr = [200, 300,400,500]

function return2ndArr (getArr){
    return getArr[1]
}

console.log(return2ndArr(myNewArr));

// console.log(return2ndArr([200, 300,400,500]))
//        We can write this way alos cause both are same


// Objects with Functions

const user = {
    username : "hitesh",
    price : 399
}

function handleObject(getvalue){
    console.log(`Username is ${getvalue.username} and Price is ${getvalue.price}`);
    
}

handleObject(user);
