class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    };
}

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(15);
const f = new Node(16);

//      1
//     / \
//    2   3
//   /\   /
//  4  15 16
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;

function maxRootToLeafPathSum(root) {
    if(root === null) return -Infinity;
    if(root.left === null && root.right === null) {
        return root.val;
    };

    let maxValue = Math.max(maxRootToLeafPathSum(root.left), maxRootToLeafPathSum(root.right));

    return root.val + maxValue;
}

console.log(maxRootToLeafPathSum(a));