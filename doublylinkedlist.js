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

    step(n) {
        if (!Number.isInteger(n)) {
            throw TypeError('n must be an integer.');
        }

        if (n > 0) {
            while (n > 0) {
                this.node = this.node.next;
                n -= 1;
            }
        } else {
            while (n < 0) {
                this.node = this.node.prev;
                n += 1;
            }
        }
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
linked_list.walkForward();
console.log(linked_list.node.val);
linked_list.walkBackward();
console.log(linked_list.node.val);
linked_list.step(2);
console.log(linked_list.node.val);
