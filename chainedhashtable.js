class ChainedHashTable {
    constructor(n, arr=[]) {
        this.table = new Array(n);

        for (let i = 0; i < this.table.length; i++) {
            this.table[i] = new LinkedList();
        }

        for (let i = 0; i < arr.length; i++) {
            this.insert(arr[i].key, arr[i].val);
        }
    }

    calcHash(key) {
        if (!(typeof key === 'string') && !(key instanceof String)) {
            throw TypeError('key must be a string.');
        }

        var key_arr = key.split('');
        return this.hashFunc(key_arr);
    }

    hashFunc(key_arr) {
        var reducer = (accum, char) => accum + char.charCodeAt();
        return key_arr.reduce(reducer, 0) % this.table.length;
    }

    get(key) {
        var index = this.calcHash(key);
        return this.table[index].get(key);
    }

    insert(key, val) {
        var index = this.calcHash(key);
        this.table[index].insert(key, val);
    }

    delete(key) {

    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    linkedListNode(key, val, next) {
        return {
            key: key,
            val: val,
            next: next,
        }
    }

    get(key) {
        var node = this.head;
        if (node.key == key) {
            return node.val;
        }

        while (node.next != null) {
            if (node.next.key == key) {
                return node.next
            }
            node = node.next;
        }
    }

    insert(key, val) {
        var newnode = this.linkedListNode(key, val, null);

        if (this.head != null) {
            var walk = this.head;
            while (walk.next != null) {
                walk = walk.next;
            }
            walk.next = newnode;
        } else {
            this.head = newnode;
        }

        return newnode;
    }

    delete(node) {
        var walk = this.head;
        if (walk == null) {
            return;
        }

        if (walk === node) {
            this.head = walk.next;
            return;
        }

        while (walk.next != null) {
            if (walk.next === node) {
                walk.next = walk.next.next;
                return;
            }
            walk = walk.next;
        }
    }
}

var linked_list = new LinkedList();
var node0 = linked_list.insert('a', 0);
var node1 = linked_list.insert('b', 1);
var node2 = linked_list.insert('c', 2);
var node3 = linked_list.insert('d', 3);
linked_list.delete(node1);
linked_list.delete(node3);
console.log(linked_list);

var table_size = 8;
var mylist = ['muenster', 'american', 'swiss', 'dubliner',
              'brie', 'cheddar', 'parmesan', 'ricotta', 
              'pepperjack', 'mozzarella', 'gouda', 'blue',
              'feta', 'gorgonzola', 'havarti', 'cottage'];
var reducer = (accum, char) => accum + char.charCodeAt();
for (let i = 0; i < mylist.length; i++) {
    mylist[i] = {
        key: mylist[i],
        val: mylist[i].split('').reduce(reducer, 0) % table_size,
    }
}

var mytable = new ChainedHashTable(table_size, mylist)
console.log(mytable.get('cottage'));
console.log(mytable.get('mexican'));
