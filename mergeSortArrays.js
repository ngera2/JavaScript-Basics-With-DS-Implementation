//I have used count to calculate the time complexity

//with for loop O(m*n)
function mergeSortedArrays(m, n) {
    var newArray = [...m, ...n];
    var count = 0
    for (var i = 0; i < newArray.length; i++) {
        for(var j = i ; j < newArray.length; j++){
             if(newArray[i] > newArray[j]){
                     var temp = newArray[i];
                     newArray[i] = newArray[j];
                     newArray[j] = temp;
             }
             count++;     
        }
    }
    console.log(newArray);
    //Represent how many times loop has run
    console.log(count);
}
//with while loop O(m+n)
function mergeSortedArrays2(m, n){
    var item1 = m[0];
    var item2 = n[0];
    var newArr = [];
    var i=1;
    var j = 1;
    var count = 0;
    while(item1 || item2){
        
       if(!item2 || item1 < item2){
           newArr[count] = item1;
           count++;
           item1 = m[i];
           i++;
       }
       else{
        newArr[count] = item2;
        count++;
        item2 = n[j];
        j++;
       }
    }
    console.log(newArr);
    //Represent how many times loop has run
    console.log(count);
} 
mergeSortedArrays([2, 3, 4], [1, 2]);
mergeSortedArrays2([2, 3, 4], [1, 2]);