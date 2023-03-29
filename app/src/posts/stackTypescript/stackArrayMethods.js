export default `export class Stack<T> {
    private items: T[]

    constructor() {
        this.items = [];
    }

    add(item: T) {    // {1}
        return this.items.push(item)
    }
    
    remove() {    // {2}
        return this.items.pop()
    }
    
    length() {    // {3}
        return this.items.length
    }
    
    isEmpty() {   // {4}
        return this.items.length === 0
    }
}`