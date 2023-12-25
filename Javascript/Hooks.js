


// module.exports = function pakTime(name) {
//     if (name.toLowerCase() == "pak" || name.toLowerCase() == "pakistan" || name.toLowerCase() == "pk")
//         return new Date();
//     else
//         return "not specified";
// }




// function add(a,b){
//     return a+b ;
// }
// console.log(add(1,2))




// const add1 = (a,b) =>{
//     return a+b ;
// }

// console.log(add1(1,2))


// const add = (a,b) =>
// {
//  return a+b;
// }
// const subtract = (a,b) =>
// {
//  return a-b;
// }
// const multiply = (a,b) =>
// {
//  return a*b;
// }
// const divide = (a=1,b=3) =>   // arrow func ¬ having default values
// {
//  return a/b;
// }
// console.log(add(1,3));
// console.log(subtract(1,3));
// console.log(multiply(1,3));
// console.log(divide()); // call function which have the default valu

// function greet(){ 
//     console.log("Welcome to GeeksforGeeks!"); 
// }; 

// var greet =  (a,c)=> { 
//     console.log("Welcome to GeeksforGeeks!"); 
// }; 

// greet(); 


// var myInt = setInterval(function () {
//     console.log("Hello");
// }, 500);


// var cron = require('node-cron');

// cron.schedule('*/5 * * * * *', () => {
//   console.log('running a task every minute');
// });


let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, true, "false"];


let n = 1;

let arr = [{
    "userName": "ehtasham",
    "lastName": "ulhaq",
    "qualifuication": "MS",
    "cnic": "456"
},
{
    "userName": "hamza",
    "lastName": "rajpoot",
    "qualifuication": "Matric",
    "cnic": "374058682525058"
},
{
    "userName": "ali",
    "lastName": "zafar",
    "qualifuication": "FSC",
    "cnic": "3478515246598721"
}];


 
// arr.forEach ((element)=>
// {
//  console.log(element.cnic)
// })



if (Array.isArray(arr) == true) {
    console.log(`==== An array prints. ====`);

    arr.forEach((hamza) => {
        console.log(`values of the array is : ${JSON.stringify(hamza)}`);
    })

}
else {
    console.log(`This is not an array`);
}






   //  A  = 90 

   // b  >= 80 

   // c >= 70 

   // d = 60

   // e >= 50

   // f  <=  n   49