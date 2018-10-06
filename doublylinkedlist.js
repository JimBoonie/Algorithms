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

    walkForward() {
        console.log(this.node.val);
        while (this.node.next != null) {
            this.node = this.node.next;
            console.log(this.node.val);
        } 
    }

    walkBackward() { 
        console.log(this.node.val);
        while (this.node.prev != null) {
            this.node = this.node.prev;
            console.log(this.node.val);
        } 
    }
}

var linked_list = new DoublyLinkedList([0, 1, 2, 3, 4]);
linked_list.walkForward();
linked_list.walkBackward();
