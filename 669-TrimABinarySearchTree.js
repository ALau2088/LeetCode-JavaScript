// Attempt 3 - Successful solution
// Strategy return a trimBST function for each node and set .left and .right nodes for new Tree.
// Updated work 2019-05-22
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */

 // Test Input
//{val:1, right:{val:2, right:null, left:null}, left:{val:0, right:null, left:null}}

var trimBST = function(root, L, R) {
    let currentNode = root;
    if (currentNode === null){
        return null
    }
    // if current node is < L, trim left
    if ( currentNode.val < L) {
        return trimBST(currentNode.right, L, R)
    } 
       
    // if current node is > R, trim right
    if ( currentNode.val > R ) {
        return trimBST(currentNode.left, L, R)
    }
    // Check new root children
    currentNode.left=trimBST(currentNode.left, L, R)
    currentNode.right=trimBST(currentNode.right, L, R)
    return currentNode
};

// // Attempt 2 - Wrong Solution
// // while loop
// var trimBST = function(root, L, R) {
//     // declare root as newRoot
//     let newRoot = root;
//     // Variable for traversing thru all the nodes
//     let currentNode = newRoot;
//     while ( currentNode != null ){
//     	if (currentNode.val < L) {
//     		newRoot = currentNode.right
//     	} else if ( currentNode.val > L {
//     		newRoot = currentNode.left
//     	} else {

//     	}
//     }
// };

// // Attempt 1 - Wrong Solution
// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @param {number} L
//  * @param {number} R
//  * @return {TreeNode}
//  */
// var trimBST = function(root, L, R) {
//     // declare root as newRoot
//     let newRoot = root;
//     // Variable for traversing thru all the nodes
//     let currentNode = newRoot;
//     console.log(newRoot)
//     if (currentNode === null){
//         return newRoot
//     }
//     // if current node is < L, trim left
//     if ( currentNode.val < L) {
//         newRoot = newRoot.right
//     } else if ( currentNode.val > L ) {
//     // if current node is > R, trim right
//         newRoot = newRoot.left
//     } else {
//     // if L => root =< R check left and right nodes
//             //console.log(newRoot)
//             trimBST(newRoot.left, L , R)
//             trimBST(newRoot.right, L, R)
//     }
//     return newRoot
// };
