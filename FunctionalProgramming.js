const radius = [5,32,2,3];
const area = function(radius){
  return Math.PI * radius * radius;
}
const circumference = function(radius){
    return Math.PI * radius * 2;
}
//Here passing a function in another function is functional programming, Here calculate is the High order function 
//and the function passed to it is the callback function
const calculate = function(radius,logic){
   let output = [];
    for(let i = 0; i < radius.length; i++){
        output.push(logic(radius[i]));
    }
    return output;
}
console.log(calculate(radius,area));

//Using prototype
Array.prototype.calculate = function(logic){
    let output = [];
     for(let i = 0; i < this.length; i++){
         output.push(logic(this[i]));
     }
     return output;
 }
 console.log(radius.calculate(circumference));

 //using map
 console.log(radius.map(area));
 console.log(radius.map(circumference));