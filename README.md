# stack

Javascript implementation of [Stack data structure](<https://en.wikipedia.org/wiki/Stack_(abstract_data_type)>), using [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

### Getting Started

---

Install in your project with,

```
npm install @iamlizu/stack
```

Usage example,

```
const Stack = require("@iamlizu/stack")

// Create new instance
const stack1 = new Stack();

stack1.push(10);
console.log(stack1.getBuffer()) // [ 10 ]
```

### Available Methods

---

| Method        | Description                                        |
| ------------- | -------------------------------------------------- |
| getBuffer     | returns a shallow copy of the Stack array          |
| isEmpty       | return `true` if empty                             |
| push          | adds item to the Stack                             |
| pop           | remove item from the Stack                         |
| peek          | returns the top item from Stack without popping it |
| size          | returns the length of the Stack                    |
| clear         | resets the Stack to empty                          |
| access(index) | returns the item on `index` from Stack             |
| search(item)  | returns the `index` of given `item` in the Stack   |

### Contributing

---

You are very much appreciated to add new functionalities to this module. Please add all the required test cases for the functionality.

You may create a pull request and wait to get reviewed, merged.

🚀 Happy coding!
