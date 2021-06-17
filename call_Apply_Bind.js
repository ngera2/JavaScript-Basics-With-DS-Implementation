let name1 = {
    FirstName: "Nishant",
    LastName: "Gera"
}
let name2 = {
   FirstName: "Nishu",
   LastName:  "Gera"
}
let printFullName = function(homeTown, currentLocation){
    console.log(this.FirstName + " " + this.LastName + " " + homeTown + " " +  currentLocation);
} 
//Call Method- allow us to pass the object refrence along with the individual parameters to the function
printFullName.call(name1,"kota","banglore");
//Apply Method- allow us to pass the object refrence along with the array of parameters to the function
printFullName.apply(name2,["Kholapur","Pune"]);
//Bind method- is almost similar to the call method but instead of returning the output it return the copy of a method
let printFunc = printFullName.bind(name2,"Pune","Banglore");
printFunc();