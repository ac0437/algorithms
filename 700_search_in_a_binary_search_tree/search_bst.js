// JS: https://leetcode.com/problems/search-in-a-binary-search-tree/submissions/1187050135/
// TS: https://leetcode.com/problems/search-in-a-binary-search-tree/submissions/1187051756/
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

//      4
//     / \
//    2   7
//   / \
//  1   3
let root = new Node(4);
root.left = new Node(2);
root.right = new Node(7);
root.left.left = new Node(1);
root.left.right = new Node(3);

function search_bst(root, val) {
    let results = [];

    function recursion(root) {
        if(!root) return null;
        let current = root;
        if(current.val === val) {
            results.push(current.val);
            if(current.left) {
                results.push(current.left.val);
                recursion(current.left);
            }
            if(current.right) {
                results.push(current.right.val);
                recursion(current.right);
            }

        }
        if(root.left) {
            recursion(root.left);
        }
        if(root.right) {
            recursion(root.right);
        }
    }

    recursion(root);

    return results;
}

function search_bst_LC(root, val) {
    function recursion(rootNode) {
        if(!rootNode) return null;
        if(rootNode.val > val) {
            return recursion(root.left);
        } else if (rootNode.val < val) {
            return recursion(root.right);
        } else {
            return rootNode;
        }
    }

    return recursion(root);
}

console.log(search_bst(root, 2));