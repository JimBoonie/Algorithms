class Queue {
    constructor(l, queue_size) {
        this.l = l;
        this.queue_size = queue_size;
        this.tail = 0
        if (l.length == this.queue_size) {
            this.head = 0;
        } else {
            this.head = l.length;
        }

        if (this.head != this.tail) {
            this.empty = true;
        } else {
            this.empty = false;
        }
    }

    enqueue(item) {
        if (this.tail == this.head && !this.empty) {
            throw RangeError('Queue overflow!');
        }

        this.l[this.head] = item;

        if (this.head >= this.queue_size - 1) {
            this.head = 0;
        } else {
            this.head += 1;
        }

        this.empty = false;
    }

    dequeue() {
        if (this.tail == this.head && this.empty) {
            throw RangeError('Queue underflow!');
        }

        var item = this.l[this.tail];

        if (this.tail >= this.queue_size - 1) {
            this.tail = 0;
        } else {
            this.tail += 1;
        }

        if (this.tail == this.head) {
            this.empty = true;
        }

        return item;
    }
}

var Q = new Queue([0, 1, 2], 8);
console.log(Q);

Q.enqueue(3);
Q.enqueue(4);
Q.enqueue(5);
Q.enqueue(6);
Q.enqueue(7);
console.log(Q);

var dequed_list = [];
dequed_list.push(Q.dequeue());
dequed_list.push(Q.dequeue());
dequed_list.push(Q.dequeue());
dequed_list.push(Q.dequeue());
dequed_list.push(Q.dequeue());
dequed_list.push(Q.dequeue());
dequed_list.push(Q.dequeue());
dequed_list.push(Q.dequeue());
console.log(dequed_list);
console.log(Q);
Q.dequeue();
