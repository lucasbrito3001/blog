export default `type StackRecord<T> = Record<number, T>

class Stack<T> {
    private items: StackRecord<T>
    private count
    constructor() {
        this.items = {}
        this.count = 0
    }
}`