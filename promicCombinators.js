function fun1() {
    return new Promise((resolve, reject) => {
        console.log("Function 1 started....");
        setTimeout(()=>{
            console.log("Function 1 completed");
            resolve();
        },1000)
    })
}

function fun2() {
    return new Promise((resolve, reject) => {
        console.log("Function 2 started....");
        setTimeout(()=>{
            console.log("Function 2 completed");
            resolve();
        },1000)
    })
}

function fun3() {
    return new Promise((resolve, reject) => {
        console.log("Function 3 started....");
        setTimeout(()=>{
            console.log("Function 3 completed");
            resolve();
        },1000)
    })
}

function fun4() {
    return new Promise((resolve, reject) => {
        console.log("Function 4 started....");
        setTimeout(()=>{
            console.log("Function 4 completed");
            reject();
        },1000)
    })
}

Promise.any([fun1(),fun2(),fun3(),fun4()])
.then(result =>{
    console.log("Execution completed")
    console.log(result)})
.catch(() => console.log("Execution Failed"))