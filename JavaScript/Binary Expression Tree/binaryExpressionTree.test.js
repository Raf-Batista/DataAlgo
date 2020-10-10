const evaluate = require('./binaryExpressionTree')

class Node {
    constructor(val, left=null, right=null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const ADD = "+"
const SUBTRACT = "-"
const MULTIPLY = "*"
const DIVIDE = "/"

let tree = new Node(MULTIPLY)
tree.left = new Node(ADD)
tree.left.left = new Node(3)
tree.left.right = new Node(2)
tree.right = new Node(ADD)
tree.right.left = new Node(4)
tree.right.right = new Node(5)


test('binaryExpressionTree', () => {
    expect(evaluate(tree)).toEqual(45)
})