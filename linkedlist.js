var linkedListNode = (val, next) => ({
    val: val,
    next: next,
});

var L = linkedListNode(0, null);
console.log(L);

var linkedList = function(arr) {
    var prev = null;
    for (let i = arr.length - 1; i >= 0; i--) {
        var node = linkedListNode(arr[i], prev);
        var prev = node;
    }

    return node;
}

var linked_list = linkedList([0, 1, 2]);
console.log(linked_list);
