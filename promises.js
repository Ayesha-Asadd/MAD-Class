let makefood = new Promise((resolve,reject) => {
let cook = true;
if (cook){
    resolve ("Food Ready");
}
else {
    reject ("Sorry! Next time");
}
});

makefood
    .then(result => console.log(result))
    .catch(error => console.error(error));
