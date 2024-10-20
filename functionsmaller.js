// function diff(num1,num2){
//     if (num1<num2){
//         return num2-num1;
//     }
     
//     else
//     {
//         return num1-num2
//     }
// }

// console.log(diff(8,6));


function doAdd(num1, num2) {
    if (arguments.length === 1) { // Check if only one argument is passed
        return num2 + 10; // Return num2 + 10
    } else if (arguments.length === 2) { // Check if two arguments are passed
        return arguments[0] + num2; // Return the sum of the first argument and num2
    }
}

export{doAdd};




   