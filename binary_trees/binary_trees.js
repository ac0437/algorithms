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

// a,b,d,e,c,f
const depthFirsValues = (root) => {
    const stack = [ root ];
    const order = [];
    while(stack[0] && stack.length > 0) {
        const current = stack.pop();
        order.push(current.val);
        if(current.right) stack.push(current.right);
        if(current.left) stack.push(current.left);
    }

    return order;
}

const depthFirsValuesRecursion = (root) => {
    if(root === null) return [];
    const leftValues = depthFirsValuesRecursion(root.left);
    const rightValues = depthFirsValuesRecursion(root.right);

    return [root.val, ...leftValues, ...rightValues]
}

const depthFirsValuesRecursionHelper = (root) => {
    const order = [];

    const recursion = (rootNode) => {
        order.push(rootNode.val);
        if(rootNode.left) recursion(rootNode.left);
        if(rootNode.right) recursion(rootNode.right);
    }

    if(rootNode){
        recursion(root);
    }

    return order;
}

// console.log("DFS: ", depthFirsValues(a));
// console.log("DFS Null: ", depthFirsValues(null));
// console.log("DFS Recusion: ", depthFirsValuesRecursion(a));
// console.log("DFS Recusion Null: ", depthFirsValuesRecursion(null));
console.log("DFS Recusion w/ Helper: ", depthFirsValuesRecursionHelper(a));
console.log("DFS Recusion w/ Helper Null: ", depthFirsValuesRecursionHelper(null));

