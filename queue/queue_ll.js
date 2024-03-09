class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

// This linked list is operating from right to left
// so the leftt most element is the first in element
// meaning the first element is at the head.
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

// enqueue
function enqueue(node, tail) {
    tail.next = node;
    node.prev = tail;

    return node;
}

// dequeue
function dequeue(head) {
    head.next.prev = null;
    head.next = null;

    return head;
}

// get node
function findNode(nodeValue, head) {
    let current = head;

    while(current.next) {
        console.log(current.val);
        if(current.val === nodeValue) {
            return true;
        } else {
            current = current.next;
        }
    }

    return -1;
}

// get last
function getLastNode(node) {
    let current = node;
    while(current) {
        current = current.next;
        if(!current.next) {
            break;
        }
    }

    return current;
}

// peak
function peak(node) {
    let current = node;
    while(current) {
        current = current.prev;
        if(!current.prev) {
            break;
        }
    }

    return current;
}

let one = new Node(1);
console.log(enqueue(one, d))
console.log("Get last: ", getLastNode(a))
console.log(dequeue(a))
console.log("Get first node: ", peak(d))
console.log(findNode('c', b))