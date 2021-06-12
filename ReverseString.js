//without the built in function
function reverseString(str) {
    if (str || str.length > 2 || typeof str === 'string') {
        var str1 = str.split('');
        var newString = "";
        for (let i = str1.length - 1; i >= 0; i--) {
            newString += str1[i];
        }
        console.log(newString);
    }
}
//built in mehtod
function reverse2(str){
   return str.split('').reverse().join('');
}

//in one inline function with ECM6 syntax
const reverse3 = str => str.split('').reverse().join('');

//with spread operator syntax
const reverse4 = str => [...str].split('').reverse().join('');

reverseString("This is it!");