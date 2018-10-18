class DoublyLinkedList {
    constructor(arr) {
        var first = this.doublyLinkedListNode(arr[0], null, null);
        var prev = first;
        for (let i = 1; i < arr.length; i++) {
            var node = this.doublyLinkedListNode(arr[i], prev, null);
            prev.next = node;
            prev = node;
        }
    
        this.head = first;
        this.tail = node;
        this.node = first;
    }

    doublyLinkedListNode(val, prev, next) {
        return {
            val: val,
            prev: prev,
            next: next,
        }
    }

    traverse() {
        var data = [];
        var node = this.head;
        data.push(node.val);
        while(node.next != null) {
            node = node.next;
            data.push(node.val);
        }

        return data;
    }

    search(val) {
        var x = this.head;
        while (x != null && x.val != val) {
            x = x.next;
        }
        return x;
    }

    insert(val) {
        var newnode = this.doublyLinkedListNode(val, this.node.prev, this.node);
        if (this.node.prev != null) {
            this.node.prev.next = newnode;
        } else {
            this.head = newnode;
        }
        this.node.prev = newnode;
        this.node = newnode;
        return this.node;
    }

    delete() {
        if (this.node.prev != null) {
            this.node.prev.next = this.node.next;
        } else {
            this.head = this.node.next;
        }

        if (this.node.next != null) {
            this.node.next.prev = this.node.prev;
        } else {
            this.tail = this.node.prev;
        }
    }

    step(n=1) {
        if (!Number.isInteger(n)) {
            throw TypeError('n must be an integer.');
        }

        if (n > 0) {
            while (n > 0 && this.node.next != null) {
                this.node = this.node.next;
                n -= 1;
            }
        } else {
            while (n < 0 && this.node.prev != null) {
                this.node = this.node.prev;
                n += 1;
            }
        }
    }

    addHead(val) {
        var node = this.doublyLinkedListNode(val, null, this.head);
        this.head.prev = node;
        this.head = node;
    }

    addTail(val) {
        var node = this.doublyLinkedListNode(val, this.tail, null);
        this.tail.next = node;
        this.tail = node;
    }

    walkToTail() {
        while (this.node.next != null) {
            this.node = this.node.next;
        } 
    }

    walkToHead() {
        while (this.node.prev != null) {
            this.node = this.node.prev;
        } 
    }
}

var linked_list = new DoublyLinkedList([0, 1, 2, 3, 4]);
console.log(linked_list.traverse());
linked_list.walkToTail();
console.log(linked_list.node.val);
linked_list.walkToHead();
console.log(linked_list.node.val);
linked_list.step(2);
console.log(linked_list.node.val);
linked_list.step(-4);
console.log(linked_list.node.val);
linked_list.addHead(-1);
console.log(linked_list.head.val);
linked_list.addTail(5);
console.log(linked_list.tail.val);
console.log(linked_list.traverse());

linked_list = new DoublyLinkedList([0, 1, 2, 3, 4]);
// test search
console.log(linked_list.search(2));
console.log(linked_list.search('foo'));

// test insert and delete
linked_list.walkToHead();
linked_list.insert(-1);
linked_list.step(4);
linked_list.insert(3);
console.log(linked_list.traverse());
linked_list.walkToHead();
linked_list.delete();
linked_list.step(4);
linked_list.delete();
console.log(linked_list.traverse());
