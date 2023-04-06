type StackRecord<T> = Record<string, T>

class Stack<T> {
    private items: StackRecord<T>;
    private count: number;
    constructor() {
        this.items = {};
        this.count = 0;
    }
    push(item: T): void {
        this.items[this.count] = item
        this.count++
    }
    pop(): boolean {
        this.count--
        return delete this.items[this.count]
    }
    getStack(): StackRecord<T> {
        return this.items
    }
}

const stack = new Stack<number>()

stack.push(2)
console.log(stack.getStack()) // { '0': 2 }
stack.push(5)
console.log(stack.getStack()) // { '0': 2, '1': 5 }
stack.push(7)
console.log(stack.getStack()) // { '0': 2, '1': 5, '2': 7 }
stack.pop()
console.log(stack.getStack()) // { '0': 2, '1': 5 }
stack.pop()
console.log(stack.getStack()) // { '0': 2 }