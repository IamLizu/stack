const Stack = require("./index");

const stack1 = new Stack();

test("Stack is a class", () => {
    expect(typeof Stack.prototype.constructor).toBe("function");
});

test("Stack can push and pop", () => {
    // Check pop
    stack1.push(1);
    stack1.push(2);
    stack1.push(3);
    stack1.push(4);
    stack1.push(5);

    expect(stack1.pop()).toBe(5);
    expect(stack1.pop()).toBe(4);
    expect(stack1.pop()).toBe(3);
    expect(stack1.pop()).toBe(2);
    expect(stack1.pop()).toBe(1);
    expect(stack1.pop()).toBe(undefined);

    // Check push
    stack1.push(1);
    expect(stack1.pop()).toBe(1);
});

test("Stack can peek", () => {
    stack1.push(5);

    expect(stack1.peek()).toBe(5);
    expect(stack1.peek()).toBe(5);

    stack1.clear();
});

test("Stack can check if empty", () => {
    expect(stack1.isEmpty()).toBe(true);

    stack1.push(1);
    expect(stack1.isEmpty()).toBe(false);
    stack1.clear();
});

test("Stack can return buffer", () => {
    stack1.push(1);
    stack1.push(2);
    stack1.push(3);
    stack1.push(4);
    stack1.push(5);

    expect(stack1.getBuffer()).toEqual([1, 2, 3, 4, 5]);
});

test("Stack can search item", () => {
    stack1.push(1);
    stack1.push(2);
    stack1.push(3);
    stack1.push(4);
    stack1.push(5);

    expect(stack1.search(3)).toBe(2);
    expect(stack1.search(6)).toBe(-1);

    stack1.clear();
});

test("Stack can access item", () => {
    stack1.push(1);
    stack1.push(2);
    stack1.push(3);
    stack1.push(4);
    stack1.push(5);

    expect(stack1.access(2)).toBe(3);
    expect(stack1.access(4)).toBe(5);

    stack1.clear();
});

test("Slack can return size", () => {
    expect(stack1.size()).toBe(0);

    stack1.push(1);
    stack1.push(2);
    stack1.push(3);
    stack1.push(4);
    stack1.push(5);

    expect(stack1.size()).toBe(5);
    stack1.clear();
});

test("Stack can clear stack", () => {
    stack1.push(1);
    stack1.push(2);
    stack1.push(3);
    stack1.push(4);
    stack1.push(5);

    expect(stack1.size()).toBe(5);
    stack1.clear();
    expect(stack1.size()).toBe(0);
});
