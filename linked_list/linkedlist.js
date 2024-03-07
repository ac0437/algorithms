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
    let newChildNode = parent.next;

    parent.next = node;
    node.prev = parent;
    node.next = newChildNode;
    newChildNode.prev = node;
    
    return node;
}

function deleteNode(node) {
    let nodePrev = node.prev;
    let nodeNext = node.next;

    node.prev.next = nodeNext;
    node.next.prev = nodePrev;
    node.prev = null;
    node.next = null;

    return node;
}

traversalLinkedList(a);
console.log("Head: ", getHeadNode(c));
console.log("Tail: ", getTailNode(d));
console.log("Insert: ", insertNode(new Node(1), a));
console.log("Delete: ", deleteNode(b));
traversalLinkedList(a);
console.log("Insert: ", insertNode(b, a));
traversalLinkedList(a);

