Function.prototype.myBind = function(){
    console.log("HI");
}
function multiply(x){
     return function(y){
         return x*y;
     }
}

var multiplyBy2 = multiply(2);
console.log(multiplyBy2(4));


// multiplyBy2.myBind();
// console.log(1)
// setTimeout(() => {
//    console.log(2) 
// }, 0);
// setTimeout(() => {
//     console.log(3) 
//  }, 0);
// console.log(1)
// for(let i=0;i<10;i++)
// {
//     setTimeout(() => {
//         console.log(i) 
//      }, 0);
// }

// const obj = {
//     key:"sdsa",
//     key1:"sad"
// }
// for(var i in obj)
// {
//    console.log(i,obj[i]);
// }