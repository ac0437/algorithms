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

traversalLinkedList(a);
console.log("Head: ", getHeadNode(c));
console.log("Tail: ", getTailNode(d));
