console.log(a);
a();
console.log(b);//it will return undefined
//b(); it will throw an not deined error
//Function Statement aka Function Declaration
function a(){
    console.log(1);
}
//function expression
var b  = function () {
    console.log(2);
}
//Named function expression
var c = function xyz(parameter){
    console.log(parameter);
}
c("argument");
//First Class Functions- Using function as a value
function xyz(para1){
   para1();
}
xyz(function (){
    console.log("First class function - passed as a value");
});
