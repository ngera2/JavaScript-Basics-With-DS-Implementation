//Hoisting is a concept in JS that tells before the excution of a code, memory is already allocated 

console.log(getName);//it will return the function body
getName();// it will execute the code because function stores the whole copy of a function before execution of code
console.log(x);//it will return undefined 
console.log(getName2);//it will return an undefined 
getName2();//It will throw an error
console.log(y);//it will throw an refernce error that var in not defined



var x = 10;
function getName(){
    console.log("AARO");
}
var getName2 = () => {
    console.log("AARO2");
}
console.log(x);//it will print 10 here
getName2();//it will print the aaro2 here