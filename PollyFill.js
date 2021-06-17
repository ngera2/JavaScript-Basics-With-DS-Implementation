let name = {
firstname: "Nishant",
lastName: "Gera"
}
let printFullName = function(homeTown,currentLocation,country) {
  console.log(this.firstname + " " + this.lastName + " " + homeTown + " " + currentLocation + " " + country );
}
let printMyName = printFullName.bind(name,"Kota","Pune");
printMyName("Rajasthan","India");

Function.prototype.myBind = function(...arg){
   let obj = this;
   //it removes the first element from an array
   let params = arg.slice(1);
    return function(...args2){
       obj.apply(arg[0],[...params,...args2]); 
    }
}
let printMyName2 = printFullName.myBind(name,"Kota","Pune");
printMyName2("Rajasthan");