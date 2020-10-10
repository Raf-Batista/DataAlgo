/*
You are given a binary tree representation of an arithmetic expression. In this tree, each leaf is an integer value,, and a non-leaf node is one of the four operations: '+', '-', '*', or '/'.

Write a function that takes this tree and evaluates the expression.

Example:
    *
   / \
  +    +
 / \  / \
3  2  4  5

This is a representation of the expression (3 + 2) * (4 + 5), and should return 45.
*/




function evaluate(root) {
    if (root.val === '*') {
        return evaluate(root.left) * evaluate(root.right);  
    } else if (root.val === '/') {
        return evaluate(root.left) / evaluate(root.right); 
    }  else if (root.val === '+') {
        return evaluate(root.left) + evaluate(root.right); 
    }  else if (root.val === '-') {
        return evaluate(root.left) - evaluate(root.right); 
    } else {
        return root.val
    }

}

module.exports = evaluate;
