class NodeClass{
    constructor(value){
        this.value = value;
        this.next = null;
        this.previous = null; 
    }
}
class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            previous: null   
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = new NodeClass(value);
        newNode.previous =  this.tail;
        this.tail.next = newNode;
        newNode.next  = null;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value){
    const newNode = new NodeClass(value);
    this.head.previous = newNode;
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this;
    }
    printList(){
      const array = [];
      let currentNode = this.head;
      while(currentNode !== null){
          array.push(currentNode.value);
          currentNode = currentNode.next;
      }
      return array;
    }
    insert(index, value){
        if(index >= this.length)
        {
            return this.append(value);
        }
        var leaderNode = this.traverseLinkedList(index - 1);
        const newNode = new NodeClass(value);
       var secondLeaderNode = leaderNode.next;
        leaderNode.next = newNode;
        secondLeaderNode.previous = newNode;
        newNode.previous = leaderNode;
        newNode.next = secondLeaderNode;
        this.length++;
    }
    remove(index){
        if(index >= this.length)
        {
             var newLastNode = this.tail.previous;
             this.tail = newLastNode;
             newLastNode.next = null;
             return this;
        }
        var leaderNode = this.traverseLinkedList(index - 1);
        var nodeToRemove = leaderNode.next;
        var secondLeaderNode = nodeToRemove.next;
        leaderNode.next = secondLeaderNode;
        secondLeaderNode.previous = leaderNode; 
        this.length--;
    }
    traverseLinkedList(index){
        var currentNode = this.head;
        while(index > 0){
              currentNode = currentNode.next;
              index--;
        }
       return currentNode;
    }
}

const myLinkedList = new DoublyLinkedList(10);
 myLinkedList.append(5);
  myLinkedList.append(16);
  myLinkedList.insert(3,99);
  myLinkedList.remove(6);
console.log(myLinkedList.printList());
myLinkedList.remove(6);
