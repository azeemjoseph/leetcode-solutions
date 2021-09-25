/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
 var mergeTrees = function(root1, root2) {
    if(!root1 || !root2){
        return root1? root1 :root2;
    }
    let stack = [{a:root1,b:root2}];
    while(stack.length){
        let cur = stack.pop();
        if(cur.a && cur.b){
            cur.a.val+=cur.b.val;
        }
        if(cur.a && cur.b && !cur.a.left ){
            cur.a.left = cur.b?.left;
            if(cur.b?.left)
                cur.b.left = null;
        }
        if(cur.a && cur.b && !cur.a.right){
            cur.a.right = cur.b?.right;
            if(cur.b?.right)
                cur.b.right = null;
        }
        if(cur.a||cur.b){
            stack.push({a:cur.a?.left,b:cur.b?.left})
            stack.push({a:cur.a?.right,b:cur.b?.right})
        }
    }
    return root1;
};