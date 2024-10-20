//map
array =[2,3,4,5,6]
function double(n){
    return n*3
}

let arr= array.map(double)
console.log(arr); 


//reduce
const names = ["Ayesha", "Alishba", "Mahnoor" , "Ayesha"];
const filterednames = names.filter((name) => { 
    
    return name !== "Alishba"; 
});

console.log (filterednames); 

//reduce


