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

function preOrderTraversal(root) {
    let results = [];
    
    function recursion(root) {
        if(!root) return null;
        results.push(root.val);
        recursion(root.left);
        recursion(root.right);
    }

    recursion(root);

    return results;
}

console.log(preOrderTraversal(a))