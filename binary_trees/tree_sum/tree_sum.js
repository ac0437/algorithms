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
const e = new Node(5);
const f = new Node(6);

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

function tree_sum_bfs(root) {
    let count = 0;
    let queue = [root];

    while(queue.length > 0) {
        let current = queue.shift();
        if(current) {
            count += current.val;
        }
        if(current.left) {
            queue.push(current.left);
        }
        if(current.right) {
            queue.push(current.right);
        }
    }

    return count;
}

function tree_sum_dfs(root) {
    let count = 0;
    let stack = [root];

    while(stack.length > 0) {
        let current = stack.pop();

        if(current) {
            count += current.val;
        }
        if(current.left) {
            stack.push(current.left);
        }
        if(current.right) {
            stack.push(current.right);

        }
    }

    return count;
}

let count = 0;
function tree_sum_dfs_recursion(root) {
    if(root) {
        count += root.val;
    }
    if(root.left) {
        tree_sum_dfs_recursion(root.left);
    }
    if(root.right) {
        tree_sum_dfs_recursion(root.right);
    }

    return count;
}

console.log(tree_sum_bfs(a));
console.log(tree_sum_dfs(a));
console.log(tree_sum_dfs_recursion(a));