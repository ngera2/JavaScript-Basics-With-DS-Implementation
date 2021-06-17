/**
 * Initialize your data structure here.
 */
var myNode = function (value) {
    this.value = value;
    this.next = null;
}
var MyLinkedList = function () {
    this.head = null;
    this.next = null;
    this.tail = null;
    this.length = 0;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    if (index < 0 || index > (this.length - 1)) {
        return -1;
    }
    let currentNode = this.head;

    while (index > 0) {
        currentNode = currentNode.next;
        index--;
    }
    return currentNode.value;

};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    let newNode = new myNode(val);
    if (this.length == 0) {
        this.head = newNode;
        this.tail = newNode;
        this.length++;
    }
    else {
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    let newNode = new myNode(val);
    if (this.length == 0) {
        this.head = newNode;
        this.tail = newNode;
        this.length++;
    } else {
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }
};
MyLinkedList.prototype.printList = function () {
    let arr = [];
    let currentNode = this.head;
    while (currentNode) {
        arr.push(currentNode.value);
        currentNode = currentNode.next;
    }
    return arr;
}
/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index >= 0 && index <= this.length) {
        if (index == this.length) {
            this.addAtTail(val);
        }
        else if (index == 0) {
            this.addAtHead(val);
        }
        else {
            let newNode = new myNode(val);
            let leaderNode = this.traverseAtIndex(index - 2);
            newNode.next = leaderNode.next;
            leaderNode.next = newNode;
            this.length++;
        }
    }
};
MyLinkedList.prototype.traverseAtIndex = function (index) {
    let currentNode = this.head;
    while (index > 0) {
        currentNode = currentNode.next;
        index--;
    }
    return currentNode;
};
/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index > 0 && index < this.length) {
        let leaderNode = this.traverseAtIndex(index - 1);
        let nodeToRemove = leaderNode.next;
        if (nodeToRemove.next) {
            leaderNode.next = nodeToRemove.next;
        }
        else {
            leaderNode.next = null;
            this.tail = leaderNode;
        }
        this.length--;
    } else if (index == 0) {
        let nodeToRemove = this.head;
        this.head = nodeToRemove.next;
        this.length--;
    }
};

MyLinkedList.prototype.checkIfPalindromeUsingArray = function () {
    let currentNode = this.head;
    let arr = [];
    while (currentNode) {
        arr.push(currentNode.value);
        currentNode = currentNode.next;
    }
    let arr1 = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        arr1.push(arr[i]);
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr1[i]) {
            return false;
        }
    }
    return true;
}
MyLinkedList.prototype.checkIfPalindromeByReversing = function(){
    let 
}
MyLinkedList.prototype.checkIfPalindromeUsingRecursive = function () {
    let currentNode = this.head;
    let arr = [];
    while (currentNode) {
        arr.push(currentNode.value);
        currentNode = currentNode.next;
    }
    return function check(i, j) {
        if (i === undefined && j === undefined) {
            i = 0, j = arr.length - 1;
        }
        let flag;
        if (arr.length % 2 === 0) {
            flag = true;
        }
        else {
            flag = false;
        }
        if (arr[i] === arr[j]) {
            if (flag == 'even') {
                if (i !== j - 1)
                    return check(i + 1, j - 1);
                else {
                    return true;
                }
            }
            else{
                if(i !== j - 2)
                {
                    return check(i + 1, j - 1);
                }
                else{
                    return true;
                }
            }
        }
        else {
            return false;
        }

        return true;
    };
}
/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
var list = new MyLinkedList();
list.addAtHead(1);
list.addAtHead(2);
list.addAtHead(3);
list.addAtHead(4);
list.addAtHead(7);
list.addAtHead(4);
list.addAtHead(3);
list.addAtHead(2);
list.addAtHead(1);
console.log(list.printList());
let f1 = list.checkIfPalindromeUsingRecursive();
console.log(f1());
console.log(list.checkIfPalindromeUsingArray());
// list.addAtHead(7);
// list.get(1);
// list.addAtHead(2);
// list.addAtHead(1);
// list.addAtIndex(3,0);
// list.deleteAtIndex(2);
// list.addAtHead(6);
// list.addAtTail(4);
//  console.log(list.printList());
// list.get(4);
// console.log(list.printList());
// list.addAtTail(3);
// list.addAtIndex(1,2);
// console.log(list.get(1));
// list.deleteAtIndex(1);
// console.log(list.get(1));
// console.log(list.printList());