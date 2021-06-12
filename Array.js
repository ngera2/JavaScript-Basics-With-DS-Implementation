console.log("My First Program");

class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    //O(1)
    get(index) {
        return this.data[index];
    }
    //O(1)
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }
    //O(1)
    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }
    //O(n)
    delete(index) {
        const item = this.data[index];
        this.shiftItems(index);
        return item;
    }
    //O(n)
    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            debugger;
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        return this.length--;
    }
}

const newArray = new MyArray();
newArray.push('Hi');
newArray.push('you');
newArray.push('there');
newArray.push('Its working');
newArray.delete(1);
console.log(newArray);