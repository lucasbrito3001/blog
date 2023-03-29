class Stack<T> {
    private items: T[]

    constructor() {
        this.items = []
    }

    add(item: T): void {
        this.items.push(item)
    }

    remove(): T | undefined {
        return this.items.pop()
    }

    peekTop(): T | undefined {
        return this.items.at(-1)
    }

    size(): number {
        return this.items.length
    }

    isEmpty(): boolean {
        return this.items.length === 0
    }
}

const stack = new Stack<number>()

console.log([1,2,3].at(-1))