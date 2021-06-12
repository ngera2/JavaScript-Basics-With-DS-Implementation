class HashTable {
    constructor(size){
      this.data = new Array(size);
    }
  
    _hash(key) {
      let hash = 0;
      for (let i =0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }
    set(arg1,arg2){
     var hashAddress = this._hash(arg1);
     if(!this.data[hashAddress])
     {
         this.data[hashAddress] = [];
     }
     this.data[hashAddress].push(arg1,arg2);
    }
    get(arg1){
        var hashAddress = this._hash(arg1);
        if(this.data[hashAddress]){
           for(var i =0; i < this.data[hashAddress].length; i++){
               if(this.data[hashAddress][i] == arg1){
               var hero = this.data[hashAddress][i+1];
                   return this.data[hashAddress][i+1];
               }
           }
        }
    }
  }
  
  const myHashTable = new HashTable(50);
  myHashTable.set('grapes', 10000)
  myHashTable.get('grapes')
  myHashTable.set('apples', 9)
  myHashTable.get('apples')
  