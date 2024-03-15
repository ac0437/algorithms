class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');


a.next = b;
b.prev = a;
b.next = c;
c.prev = b;
c.next = d;
d.prev = c;

function traversalLinkedList(root) {
    let node = root;
    while(node) {
        console.log(node.val);
        node = node.next;
    }
}

function getHeadNode(node) {
    let head = node;
    while(head.prev) {
        head = head.prev;
    }

    return head.val;
}

function getTailNode(node) {
    let tail = node;
    while(tail.next) {
        tail = tail.next;
    }

    return tail.val;
}

function insertNode(node, parent) {
    if(!parent.prev) {
        parent.prev = node;
        node.next = parent;
    } else if (!parent.next) {
        parent.next = node;
        node.prev = parent;
    } else {
        let newChildNode = parent.next;

        parent.next = node;
        node.prev = parent;
        node.next = newChildNode;
        newChildNode.prev = node;
    }

    return node;
}

function deleteNode(node) {
    if(!node.prev) {
        node.next.prev = null;
        node.next = null;
    } else if(!node.next) {
        node.prev.next = null;
        node.prev = null;
    } else {
        let nodePrev = node.prev;
        let nodeNext = node.next;
    
        node.prev.next = nodeNext;
        node.next.prev = nodePrev;
        node.prev = null;
        node.next = null;    
    }

    return node;
}

function deleteAt(root, index) {
    let current = root;
    let count = 0;
    while(current) {
        if(count === index) {
            return deleteNode(current);
        }
        current = current.next;
        count++;
    }

    return -1;
}

function getNode(root, target) {
    let current = root;
    while(current){
        if(current.val === target){
            return current.val;
        } else {
            current = current.next;
        }  
    }
    
    return -1; 
}

function getLength(root) {
    let results = [];
    let current = root;
    while(current) {
        results.push(current.val);
        current = current.next;
    }
    console.log(results)
    return results.length;
}

function sumOfLinkedList(node) {
    let sum = 0;
    let current = node;

    while(current) {
        sum += current.val.charCodeAt(0);
        current = current.next;
    }

    return sum;
}

// traversalLinkedList(a);
// console.log("Head: ", getHeadNode(c));
// console.log("Tail: ", getTailNode(d));
// console.log("Insert: ", insertNode(new Node(1), a));
// console.log("Delete: ", deleteNode(b));
// traversalLinkedList(a);
// console.log("Insert: ", insertNode(b, a));
// traversalLinkedList(a);
// console.log("Get node: ", getNode(a, 'c'));
// console.log("Get node (Not found): ", getNode(a, 'v'));
// console.log("Delete node at: ", deleteAt(a, 2));
// console.log("Get size: ", getLength(a));
// let one = new Node(1);
// console.log("Insert to head: ", insertNode(one, a));
// traversalLinkedList(one);
// console.log("Delete from head: ", deleteNode(one))
// traversalLinkedList(one);
// console.log("Insert to tail: ", insertNode(one, d));
// traversalLinkedList(a);
// console.log("Delete from tail: ", deleteNode(one))
// traversalLinkedList(a);
console.log(sumOfLinkedList(a))

