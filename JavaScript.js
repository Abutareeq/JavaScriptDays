// //Objects--> in objects we have key & values. there is no concept of indexing in objects.
// var obj = {
//     Name : {
//     firstname : "Abu",
//     middlename: "Tareeq",
//     lastname  : "Shaikh",
//     },
//     DoY  : 2008,
//     Hobbies : ['singing','dancing','fighting'],
//     Adress: "VikramRoad",
// }
// console.log(obj.Name.middlename);
// console.log(obj.Hobbies[2]);

// //Objects in array
// var arr = [
//     { firstname : 'Faizan', lastname : 'Shaikh'},
//     { firstname : 'Saeed', lastname  : 'Shaikh'},
//     { firstname : 'Idrees', lastname : 'Shaikh'}
// ]
// console.log(arr[1]);
// console.log(arr[1].firstname);

// // For in loop --> to get the keys of the objects
// for (let key in obj){
//     console.log(key);
// }
// //Another way to get the key of obj. it will give key in form of array
// console.log(Object.keys(obj));

// var arr = ['ankit','neha','gori',123,true,['sing','dance','code']]
// console.log(arr[5][2]);         //output--> code

// //for in loop gives index number for array
// for(let i in arr){
//     console.log(i);
// }

// //For of loop --> to get the element of array. for of loop doesnt work with objects{}
// for(let a of arr){
//     console.log(a);
// }

// //Fuctions in JavaScript --> It is a defined(define by us) piece of code which is run when we call it.
// function add(a, b){
//     return a+b
// }
// var sum = add(1, 3) // it will "return" here after processing all the calculation internaly
// console.log(sum)        //out put -> 4

// // Write a function to calculate the factorial of number
// function fact(num){
//     var ans = 1
//     for( i=num; i>=1; i-- ){
//         ans = ans * i
//     }
//      return ans
// }
// console.log(fact(5));       //output -> 120

// //PASS BY VALUE AND PASS BY REFERENCE

// var variable = 10
// a (variable)
// function a(variable){
//     variable = variable + 10
// }
// console.log(variable);
/*output is 10 because function's variable is separate from files variable. line no. 63,64 & 68 have same variable
 but inside the function the varaible is diffrente. this is called PASS BY VALUE. */ 

//  //PASS BY REFERENCE --> 
//  function abc(arr){
//     arr[0] = 10
//     arr[1] = 20
//  }
// var arr = [1, 2]
// console.log(arr);       //output is--> [1, 2]
// abc(arr)
// console.log(arr);       //output is--> [10, 20]








