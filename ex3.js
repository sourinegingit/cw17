function f(x){
    alert(x);
}

function delay(func,time){
    return (param)=>{
        setTimeout(()=>func(param),time);
        // console.log(func(param));
        // console.log(()=>func(param));
    }
}


console.log(delay(f,1000));
let f1000=delay(f,1000);
f1000("test");






















