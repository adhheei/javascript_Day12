function fun1(){
    return new Promise((resolve,rejected) =>{
    console.log("function 1 is started....");
    setTimeout(() =>{
        console.log("Fun 1 completed");
        resolve()
    },1000);
    
});
}

fun1()
.then(()=>console.log("Execution Successefull"))
.catch(()=> console.log("Execution Failed !"))