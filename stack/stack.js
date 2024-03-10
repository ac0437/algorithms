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

function addNode(newNode, node) {
    let current = node;

    while(current) {
        current = current.next;
        if(!current.next) {
            current.next = newNode;
            newNode.prev = current;
            break;
        }
    }

    return newNode;
}

function takeNode(node) {
    let current = node;

    while(current) {
        current = current.next;
        if(!current.next) {
            current.prev.next = null;
            current.prev = null;
            break;
        }
    }

    return node;
}

function peek(node) {
    let current = node;

    while(current) {
        current = current.next;
        if(!current.next) {
            return current;
        }
    }

    return -1;
}

console.log(peek(a))
console.log(addNode(new Node(1), a))
console.log(peek(a))
console.log(takeNode(a))
console.log(peek(a))