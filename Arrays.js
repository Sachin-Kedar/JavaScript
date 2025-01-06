/*

1. In JavaScript, arrays aren't primitives but are instead Array objects.

2. JavaScript arrays are resizable and can contain a mix of different data types. 

3. JavaScript array-copy operations create shallow copies.
    ex. 
        const fruits = ["Strawberry", "Mango"];

        // Create a copy using spread syntax.
        const fruitsCopy = [...fruits];

        console.log(fruitsCopy);


*/
 
// const fruits = [];
// fruits.push("banana", "apple", "peach");
// console.log(fruits.length); // 3


// fruits[5] = "mango";
// console.log(fruits[5]); // 'mango'
// console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
// console.log(fruits.length); // 6


// fruits.length = 10;
// console.log(fruits); // ['banana', 'apple', 'peach', empty x 2, 'mango', empty x 4]
// console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
// console.log(fruits.length); // 10
// console.log(fruits[8]); // undefined


// fruits.length = 2;
// console.log(Object.keys(fruits)); // ['0', '1']
// console.log(Object.values(fruits)); 
// console.log(fruits.length); // 2


// Array Methods:


const colors1 = ["red", "yellow", "blue"];
colors1[5] = "purple";
// colors.forEach((item, index) => {
//   console.log(`${item}: ${index}`);
// });
// Output:
// 0: red
// 1: yellow
// 2: blue
// 5: purple

// colors.reverse(); // ['purple', empty × 2, 'blue', 'yellow', 'red']


const colors2=[1,2,3,4,5,6];
//  Adding elt. at last position 
colors2.push(6);

// Removes last item
colors2.pop();

// Add elt. at Zeroth index

colors2.unshift(11);

// Removes elt. at Zeroth index
colors2.shift(11);

// Checks if value is present orr not

// console.log("Is value available or not : " + colors2.includes(2));
// console.log("Is value available or not : " + colors2.includes(9));

// Checks if index of element
//console.log(colors2.indexOf(5));

/*  
Join:
  When we use join method on Arrays it will copies all elt. from array 
  but it converts in string type.
*/

// console.log(colors2);
// console.log(typeof(colors2));


// const newArr= colors2.join();
// console.log(newArr);

// console.log(typeof(newArr));


// Slice :  return a copy of a portion of an array 

// console.log("Slice of an Array: "+colors2.slice(2,6));

/* Splice : The splice() method of Array instances changes the contents
            of an array by removing or replacing existing elements and/or adding new elements in place
          
            Also it includes last Range
*/

// console.log("Before Splice: "+ colors2);
// console.log("Splice of an Array: "+ colors2.splice(2,0,8));
// console.log("After Splice : "+ colors2);

/* 
Here splice(a,b,c):
    a--> Insert at index want to modify
    b--> till how much index we want to modify
    c--> If any elt. want to add

   We can use 3rd place if necessary.
*/

// console.log(colors2.length)

/* 
Adding two or more Arrays:
  1. Push
  2. Concat (+)
  3. Spread (...)
  

const colors3=["A","B","C","D"];

const colors4=["E","F","G","H"];

const colors5= ["x","y","z"]

 // colors3.push(colors5);
 console.log("Using Push : ");
 console.log(colors3);

 const newArr2= colors3.concat(colors4);
 console.log("Using Concat : ");
 console.log(newArr2);

 const newArr3= [...colors3, ...colors4];
 console.log("Using Spread : ");
 console.log(newArr3);

 */


console.log(colors2.isArray);