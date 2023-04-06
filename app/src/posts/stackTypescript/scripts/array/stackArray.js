export default `class Stack<T> {
    private items: T[]
    constructor() {
        this.items = [];
    }
    
    push(item: T) {
        return this.items.push(item)
    }
    pop() {
        return this.items.pop()
    }
    getStack() {
        return this.items
    }
}

const stack = new Stack<number>()

stack.push(2)
console.log(stack.getStack()) // [2]
stack.push(5)
console.log(stack.getStack()) // [2,5]
stack.push(7)
console.log(stack.getStack()) // [2,5,7]
stack.pop()
console.log(stack.getStack()) // [2,5]
stack.pop()
console.log(stack.getStack()) // [2]`