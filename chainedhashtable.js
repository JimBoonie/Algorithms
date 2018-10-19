class ChainedHashTable {
    constructor(n, arr=[]) {
        this.table = new Array(n);
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

    }

    insert(key, val) {
        var index = this.calcHash(key);
        this.table[index] = val;
    }

    delete(key) {

    }
}

var mytable = new ChainedHashTable(8)
mytable.insert('foo', 'bar');
console.log(mytable);
