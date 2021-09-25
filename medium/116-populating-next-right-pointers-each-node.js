/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
 var connect = function(root,rightNode = null) {
    if (!root) return root;
    
    root.next = rightNode;
    connect(root.left, root.right);
    connect(root.right, rightNode ? rightNode.left : null);
    
    return root;
};