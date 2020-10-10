/*

Not Solved 

Given a tree, find if the binary tree is height balanced or not.
 A height balanced binary tree is a tree where every node's 2 subtree do not differ in height by more than 1.


     1
    / \
   2   3
  /
 4  
 True

     1
    / 
   2   
  /
 4  
 False

*/

function heightBalance(tree, count = 0) {
    
    tree.left ? heightBalance(tree.left, count+=1) : count
    
  
   // let right = tree.right ? heightBalance(tree.right, count+1) : count

}


module.exports = heightBalance
