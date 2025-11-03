function fun1(){
    return new Promise((resolve,rejected) =>{
    console.log("function 1 is started....");
    setTimeout(() =>{
        console.log("Fun 1 completed");
        resolve()
    },1000);
    
});
}


function fun2(){
    return new Promise((resolve,rejected) =>{
    console.log("function 2 is started....");
    setTimeout(() =>{
        console.log("Fun 2 completed");
        resolve()
    },2000);
    
});
}

function fun3(){
    return new Promise((resolve,rejected) =>{
    console.log("function 3 is started....");
    setTimeout(() =>{
        console.log("Fun 3 completed");
        resolve()
    },3000);
});
}

function fun4(){
    return new Promise((resolve,rejected) =>{
    console.log("function 4 is started....");
    setTimeout(() =>{
        console.log("Fun 4 Failed");
        rejected()
    },4000);
    
});
}

fun1()
.then(fun2)
.then(fun3)
.then(fun4)
.then(() => console.log("Execution completed"))
.catch(() => console.log("Execution failed !"));