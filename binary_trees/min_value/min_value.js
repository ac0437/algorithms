class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    };
}

const a = new Node(1);
const b = new Node(2);
const c = new Node(0);
const d = new Node(4);
const e = new Node(5);
const f = new Node(-1);

//      1
//     / \
//    2   0
//   /\   /
//  4  5 -1
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;

function findMinValueBFS(root) {
    let smallest = Infinity;
    const queue = [ root ];

    while(queue.length > 0) {
        let current = queue.shift();
        if(current.val < smallest) smallest = current.val;

        if(current.left) queue.push(current.left);
        if(current.right) queue.push(current.right);
    }

    return smallest;
}

function findMinValueDFS(root) {
    let smallest = Infinity;
    const stack = [root]

    while(stack.length > 0) {
        let current = stack.pop();
        if(current.val < smallest) smallest = current.val;

        if(current.left) stack.push(current.left);
        if(current.right) stack.push(current.right);
    }

    return smallest;
}

function findMinValueDFSRecursion(root) {
    if(root === null) return Infinity;

    return Math.min(root.val, findMinValueDFSRecursion(root.left), findMinValueDFSRecursion(root.right));
}

console.log(findMinValueBFS(a));
console.log(findMinValueDFS(a));
console.log(findMinValueDFSRecursion(a));