class BinaryTree {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }

    insertLeft(val) {
        if (this.left != null) {
            var new_node = new BinaryTree(val);
            new_node.left = this.left;
            this.left = new_node;
        } else {
            this.left = new BinaryTree(val);
        }
    }

    insertRight(val) {
        if (this.right != null) {
            var new_node = new BinaryTree(val);
            new_node.right = this.right;
            this.right = new_node;
        } else {
            this.right = new BinaryTree(val);
        }
    }
}

var tree = new BinaryTree('a');
tree.insertLeft('b');
tree.insertRight('f');
tree.insertRight('c');
tree.left.insertRight('d');
tree.right.insertLeft('e');
console.log(tree);