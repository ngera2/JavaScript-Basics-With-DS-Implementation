let arr1 = [1,2,3,4,6];
let arr2 = [2,3,4,5,8];
let hashSet = new Set(arr1);
let newArr = [];
for(let i=0;i <arr2.length;i++){
    if(hashSet.has(arr2[i])){
        newArr.push(arr2[i]);
    }
}
console.log(newArr);
