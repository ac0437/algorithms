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

function find_target_bfs(root, target) {
    if(!root) return false;
    const queue = [root];

    while(queue.length > 0) {
        let current = queue.shift();
        if(current.val === target) {
            return true;
        }
        if (current.left) {
            queue.push(current.left);
        }
        if (current.right) {
            queue.push(current.right);
        }
        
    }

    return false;
}

function find_target_dfs(root, target) {
    if(!root) return false;
    let stack = [ root ];

    while(stack.length > 0) {
        let current = stack.pop();
        if(current.val === target) {
            return true;
        }
        if(current.right) {
            stack.push(current.right);
        }
        if(current.left) {
            stack.push(current.left);
        }
    }

    return false;
}

function find_target_dfs_recursion(root, target) {
    if(!root) return false;
    let targetFound = false;
    function recursion(root) {
        let current = root;
        if(current.val === target) {
            targetFound = true;
        }
        if(current.left) {
            recursion(current.left);
        }
        if(current.right) {
            recursion(current.right);
        }
    }

    recursion(root)
    return targetFound;
}

function find_target_dfs_recursion_optimized(root, target) {
    if(!root) return false;
    if(root.val === target) return true;
    return find_target_dfs_recursion_optimized(root.left, target) || find_target_dfs_recursion_optimized(root.right, target);
}

console.log(find_target_dfs(a, 'f'));
console.log(find_target_dfs(a, 'g'));

console.log(find_target_dfs_recursion(a, 'f'));
console.log(find_target_dfs_recursion(a, 'g'));

console.log(find_target_dfs_recursion_optimized(a, 'f'));
console.log(find_target_dfs_recursion_optimized(a, 'g'));

console.log(find_target_bfs(a, 'f'));
console.log(find_target_bfs(a, 'g'));