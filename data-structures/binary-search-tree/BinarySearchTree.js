const {Node} = require('./Node.js');

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value){
        this.root = this.insertNode(this.root, value);

        return this;
    }

    insertNode(currRoot, value) {
        if (currRoot === null) {
            return new Node(value);
        } else if (value < currRoot.value) {
            currRoot.left = this.insertNode(currRoot.left, value);
        } else if (value > currRoot.value) {
            currRoot.right = this.insertNode(currRoot.right, value);
        }

        return currRoot;
    }

    remove(value) {

    }

    find(value) {

    }
}

module.exports = {BinarySearchTree};