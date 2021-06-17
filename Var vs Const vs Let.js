console.log(myName);

let myName = "Nishant";

myName = 453;
console.log(myName);

let a = 10;
var b = 100;
const c  = 90;
{
    var b = 'b';
    let a = 100;
    const c  = 21;
    console.log(a);
}
console.log(a);
console.log(b);
console.log(c);

var beta = 10;
if(true){
 var beta = 100;
}

console.log(beta);


//Function scope VS block scope
function abc(){
    var xyz = 2;
}
//var ab = 100;
if(true){
    var ab = 90;
}
console.log(ab);
abc();
//console.log(xyz); throws an error
var x = 10;
var ab = function(){
    return function abc(){
        console.log(x)
    }
}
var second  = ab();
second();