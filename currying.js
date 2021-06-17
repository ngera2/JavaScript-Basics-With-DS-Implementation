//Function currying is a concept of returning the partial function and using it afterwards is a code

//Function currying by bind method
let multiply = function(x,y){
  console.log(x*y);
}
let multiplyBy2 = multiply.bind(this,2);
multiplyBy2(3);

//Function currying by closure
let multiply2 = function(x){
    
    return function(y){
        console.log(x*y);
    }
}
let multiplyBy3 = multiply2(3);
multiplyBy3(3);

//Using arrow function
let multiply3 = (x) =>  (y) =>{
    console.log(x*y);
}

let multiplyBy4 = multiply3(4);
multiplyBy4(4);

