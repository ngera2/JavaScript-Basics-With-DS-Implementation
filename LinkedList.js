 class NodeClass{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = new NodeClass(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value){
    const newNode = new NodeClass(value);
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
        if(index > this.length)
        {
            return undefined;
        }
        var leaderNode = this.traverseLinkedList(index - 1);
        const newNode = new NodeClass(value);
        newNode.next = leaderNode.next;
        leaderNode.next = newNode;
        this.length++;
    }
    remove(index){
        if(index > this.length)
        {
            return undefined;
        }
        var leaderNode = this.traverseLinkedList(index - 1);
        var nodeToRemove = leaderNode.next;
        leaderNode.next = nodeToRemove.next;
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
    reverse(){
          var first =  this.head;
          this.tail = this.head;
          var second = first.next;
        while(second){
            const temp1 = second.next;
            second.next = first;
            first = second;
            second = temp1;
        }
        this.head.next = null;
        this.head = first;
    }
}

const myLinkedList = new LinkedList(10);
 myLinkedList.append(5);
  myLinkedList.append(16);
  console.log(myLinkedList.printList());
  myLinkedList.remove(2);
  console.log(myLinkedList.printList());

 myLinkedList.prepend(1);
 myLinkedList.prepend(2);
 myLinkedList.insert(2,99);
 myLinkedList.insert(2,233);

 console.log(myLinkedList.printList());
// myLinkedList.reverse();
// console.log(myLinkedList.printList());
