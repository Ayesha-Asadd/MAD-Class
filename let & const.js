let age = 35;
console.log(age);
// reassign
age = 40;
console.log(age);


// Using const
const name='Ayesah';
console.log(name);

const person ={ name: 'Ayesha', age: 20};

// You cannot reassign the entire objectmn
person = { name: "Bob", age: 30 }; 
person.age = 30;
console.log(person); 

const numbers = [1, 2, 3];

numbers.push(4);
console.log(numbers); // [1, 2, 3, 4]