// function set(x){
//     alert(x);
// }

// let f= debunce(func,time){
//     return (param){
//         setTimeout(()=>func(param),time);
//     }


// }

// f("a");



// ===========================================
// var button = document.getElementById("debounce");
// const debounce = (func, delay) => {
//     let debounceTimer
//     return function() {
//         const context = this
//         const args = arguments
//             clearTimeout(debounceTimer)
                
//             debounceTimer= setTimeout(() => func.apply(context, args), delay)
//     }
// } 
// debounce(function() {
//         alert("Hello\nNo matter how many times you" +
//             "click the debounce button, I get " +
//             "executed once every 3 seconds!!")
//                         }, 3000);


// ==========================================

function alert(x)
{
    console.log(x);
}

function debounce(func, timeout = 1000){
        let timer;
        let input;
        return (args) => {
        if(args!=input){
          clearTimeout(timer);  
        }
        input=args;
        timer = setTimeout(() => { func(args); }, timeout);
    
        };
        }
     
    const result=debounce(alert,1000);
    // console.log(debounce(alert,2000));
    result('a');
    setTimeout( () => result("c"), 200);
    setTimeout( () => result("c"), 500);


    // ==================================================
// function debounce(func, timeout = 1000){
//     let timer;

//     return (args) => {
//     clearTimeout(timer);
//     timer = setTimeout(() => { func(args); }, timeout);

//     };
//     }
 
// const result=debounce(alert,1000);
// // console.log(debounce(alert,2000));
// result('a');
// setTimeout( () => result("b"), 2000);
// setTimeout( () => result("c"), 4000);























