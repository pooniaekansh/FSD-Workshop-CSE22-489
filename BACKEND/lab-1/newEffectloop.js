console.log("This is the starting point of code");

process.nextTick(() => {
    console.log("This is timeout");
});

setTimeout(() => {
    console.log("this is first timeout function");
}, 5000);

setTimeout(() => {
    console.log("this is second timeout function");
}, 2000);

console.log("this is the end point of my code");

setTimeout(() => {
    console.log("this statement will process after 3 seconds");
}, 3000);

process.nextTick(() => {
    console.log("This is process.nextTrick code");
});
new Promise((resolve,reject) =>{
    let succes=true;
    if(succes)resolve("Data loaded successfully");
    else reject("something went wrong");
})