var doublyLinkedListNode = (val, prev, next) => ({
    val: val,
    prev: prev,
    next: next,
});

var doublyLinkedList = function(arr) {
    var first = doublyLinkedListNode(arr[0], null, null);
    var prev = first;
    for (let i = 1; i < arr.length; i++) {
        var node = doublyLinkedListNode(arr[i], prev, null);
        prev.next = node;
        prev = node;
    }

    return first;
}

var walkForward = function(ll) {
    do {
        console.log(ll.val);
        ll = ll.next;
    } while (ll != null)
}

var walkBackward = function(ll) {
    do {
        ll = ll.next;
    } while(ll.next != null)

    do {
        console.log(ll.val);
        ll = ll.prev;
    } while (ll != null)
}

var linked_list = doublyLinkedList([0, 1, 2, 3, 4]);
walkForward(linked_list);
walkBackward(linked_list);
