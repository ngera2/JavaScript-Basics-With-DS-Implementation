//Closure is a function bundled together along with it's lexical scope forms a closure
function a(){
   var x = 10;
  function b(){
    function c(){
    //    var x =100;
             console.log(x);
      }
      return c;
  }
  return b;
}
var y = a();
console.log(y);//function y will print the function b body

var z = y();
console.log(z);
z();



//Scalable closure with more than two functions
//constructor functions
function counter(){
    let count = 0;
    this.incrementCounter = function(){
        count++;
        console.log(count);
    }
    this.decrementCounter = function(){
        count--;
        console.log(count);
    }
}
var count = new counter();
count.incrementCounter();
count.incrementCounter();
count.incrementCounter();
count.decrementCounter();


