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

// a,b,c,d,e,f
function bfs(root) {
    let queue = [];
    function recursion(rootNode) {
        if (rootNode) {
            queue.push(rootNode.val);
            if(rootNode.left){
                queue.push(rootNode.left.val);
            }
            if(rootNode.right){
                queue.push(rootNode.right.val);
            }
        }
        if(rootNode.left) {
            recursion(rootNode.left);
        }
        if(rootNode.right) {
            recursion(rootNode.right);
        }
    }

    recursion(root);

    return [...new Set(queue)]
}

function bfs_std(root) {
    const results = [];
    const queue = [root];
    
    while(queue.length > 0) {
        let current = queue.shift();

        results.push(current.val);
        if(current.left !== null) {
            queue.push(current.left);
        }
        if(current.right !== null) {
            queue.push(current.right);
        }

    }

    return results;
}

console.log(bfs(a));
console.log(bfs_std(a));