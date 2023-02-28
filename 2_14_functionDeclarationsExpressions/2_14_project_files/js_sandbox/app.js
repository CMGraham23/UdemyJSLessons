// // FUNCTION DECLARATIONS

// function greet(firstName = 'John', lastName = 'Doe'){
//   // if(typeof firstName === 'undefined'){firstName = 'John'}
//   // if(typeof lastName === 'undefined'){lastName = 'Doe'}
//   //console.log('Hello');
//   return 'Hello ' + firstName + ' ' + lastName;
// }

// // console.log(greet());

// // FUNCTION EXPRESIONS

// const square = function(x = 3){
//   return x*x;
// };

// // console.log(square());

// // IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

// // (function(){
// //   console.log('IIFE Ran..');
// // })();

// // (function(name){
// //   console.log('Hello '+ name);
// // })('Brad');

// // PROPERTY METHODS

// const todo = {
//   add: function(){
//     console.log('Add todo..');
//   },
//   edit: function(id){
//     console.log(`Edit todo ${id}`);
//   }
// }

// todo.delete = function(){
//   console.log('Delete todo...');
// }

// todo.add();
// todo.edit(22);
// todo.delete();



// FUNCTION DECLARATIONS

// function greet(){
//   console.log('Hellow');
// }

// greet();

// the correct way to do it is to use function expressions

function greet(){
  return 'Hello';
}

console.log(greet());



function greets(firstName){
  return 'Hellow ' + firstName;
}

console.log(greets('Chris'));




function greats(firstName, lastName){
  return 'Hellow ' + firstName + ' ' + lastName;
}

console.log(greats('Chris', 'Smith'));



// if you don't pass a value to the function it will return undefined
function great(firstName = 'John', lastName = 'Doe'){
  return 'Hellow ' + firstName + ' ' + lastName;
}

console.log(great());



// FUNCTION EXPRESSIONS

const square = function(x =3){
  return x*x;
};

console.log(square());



// IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

// (function(){
//   console.log('IIFE Ran..');
// })();

// (function(name){
//   console.log('Hello '+ name);
// })('Brad');



//PROPERTY METHODS

//When a function is put inside an object it is called a method

const todo = {
  add: function(){
    console.log('Add todo..');
  },
  edit: function(id){
    console.log(`Edit todo ${id}`);
  }
}

todo.delete = function(){
  console.log('Delete todo...');
}

todo.add();
todo.edit(22);
todo.delete();