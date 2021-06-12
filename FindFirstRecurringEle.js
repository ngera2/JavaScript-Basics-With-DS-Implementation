//using map
function firstRecurringEle(arg) {
    var newMap = new Map(); 
    for (var i = 0; i < arg.length; i++) {
      if(!newMap.has(arg[i])){
        newMap.set(arg[i],i);
    }
    else{
       return arg[i];
    }
    }
}
//using obj
function firstRecurringEle2(arg) {
    var newMap = {}; 
    for (var i = 0; i < arg.length; i++) {
      if(newMap[arg[i]] !== undefined){
        return arg[i];
    }
    else{
       newMap[arg[i]] = i;
    }
    }
}
var arr = [5, 6, 5, 4];
console.log(firstRecurringEle2(arr));