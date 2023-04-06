export default `pop(): boolean {
    this.count--
    return delete this.items[this.count]
}`