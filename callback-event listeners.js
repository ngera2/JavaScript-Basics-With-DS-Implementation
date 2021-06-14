//callback is a function passed as an argument to another function
//a callback function can run after another function has finished
//we shall use callback function when function has to wait for another function
function addResult(a,b,func2){
    func2(a+b);
}
function displayResult(result){
    console.log(result);
}
addResult(1,2,displayResult);

//we use callback functions in event based calling normally
//here it attaches a function to the click event so when user will click on the button it will 
//add the function in the queue
//and the event loop will addit to the stack after execution of all the functions
document.queryselector("#callback-btn")
    .addEventListener("click", function() {    
      console.log("User has clicked on the button!");
});
//Why we use asynchronus request?
//Suppose lets say we are using synchronus api fetch and it fails then it will hold back all other events of a page also 
//So synchronus requests are terible idea
//Asynchronus request dosen't block other requests no matter if it fails or success, as it won't stop processing the other requests