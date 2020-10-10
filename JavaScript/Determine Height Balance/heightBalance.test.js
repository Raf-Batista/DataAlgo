const heightBalance = require('./heightBalance')

class Node {
    constructor(val, left=null, right=null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

/* 
      1
     / \
    2   3
   /
  4  
  True
*/
let n4 = new Node(4)
let n3 = new Node(3)
let n2 = new Node(2, n4)
let n1 = new Node(1, n2, n3)

/*
      1
     / 
    2   
   /
  4  

 False
*/
let falseNode = new Node(1, n2)

test('returns true for height balanced tree', () => {
    expect(heightBalance(n1)).toEqual(true)
})

// test('returns false for non height balanced tree', () => {
//     expect(heightBalance(falseNode)).toEqual(false)
// })