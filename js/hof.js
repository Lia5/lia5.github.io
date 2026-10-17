'use strict';

function calculate(operation, initialValue, numbers) {
 let result = initialValue;
 for (const number of numbers) {
   result = operation(result, number);
 }
 return result;
}


// sum() - це функція додавання. 
function sum(n1, n2) {
   return n1 + n2;
}

// multiply() - це функція множення.

function multiply(n1, n2) {
   return n1 * n2;
}

console.log(calculate(sum, 0, [1, 2, 4]));      // => 7
console.log(calculate(multiply, 1, [1, 2, 4])); // => 8


let student_names = ["Wick", "Malcolm", "Smith"];

student_names.map((name, index, array) => {
  console.log(`name: ${name} | index: ${index} | array: [ "${array.join('", "')}" ]`);
});
//name: Wick | index: 0 | array: [ "Wick", "Malcolm", "Smith" ]
//name: Malcolm | index: 1 | array: [ "Wick", "Malcolm", "Smith" ]
//name: Smith | index: 2 | array: [ "Wick", "Malcolm", "Smith" ]

let students_information = [
    {"name": "Wick", "degree": 375}, 
    {"name": "Malcolm", "degree": 405}, 
    {"name": "Smith", "degree": 453},
];
const max_degree = 600;

let students_percentage = students_information.map(student => {
    return {
        "name": student.name,
        "degree": student.degree,
        "percentage": ((student.degree / max_degree) * 100).toFixed(1)
    };
});

console.log(students_percentage);