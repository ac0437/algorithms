// JS: https://leetcode.com/problems/binary-tree-inorder-traversal/submissions/1194739719/
// TS: https://leetcode.com/problems/binary-tree-inorder-traversal/submissions/1195259361/
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    };
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

//      a
//     / \
//    b   c
//   /\   /
//  d  e f
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;

function inorderTraversal(root) {
    let results = [];

    function recursion(root) {
        if(!root) return null;
        recursion(root.left);
        results.push(root.val);
        recursion(root.right);
    }

    recursion(root);

    return results;
}

console.log(inorderTraversal(a));