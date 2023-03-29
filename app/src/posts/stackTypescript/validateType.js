var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
    }
    Stack.prototype.add = function (item) {
        this.items.push(item);
    };
    Stack.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    Stack.prototype.remove = function () {
        return this.items.pop();
    };
    Stack.prototype.peekTop = function () {
        return this.items[-1];
    };
    return Stack;
}());
var stack = new Stack();
console.log([1, 2, 3].at(-1));
