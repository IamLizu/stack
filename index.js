class Stack {
    constructor(array) {
        this.array = [];
        if (array) {
            this.array = array;
        }
    }

    getBuffer() {
        return this.array.slice();
    }

    isEmpty() {
        return this.array.length === 0;
    }

    push(value) {
        this.array.push(value);
    }

    peek() {
        return this.array[this.array.length - 1];
    }

    pop() {
        return this.array.pop();
    }

    size() {
        return this.array.length;
    }

    clear() {
        this.array = [];
    }

    access(index) {
        if (index < 0 || index >= this.array.length) {
            return null;
        }
        return this.array[index];
    }

    search(value) {
        for (var i = 0; i < this.array.length; i++) {
            if (this.array[i] === value) {
                return i;
            }
        }
        return -1;
    }
}

module.exports = Stack;
