const {BinarySearchTree} = require("./BinarySearchTree");

describe('binary search tree', () => {
    describe('insert', () => {
        it('inserts a node into an empty tree', () => {
            const tree = new BinarySearchTree();

            const result = tree.insert(1);

            expect(result).toEqual(tree);
            expect(result.root.value).toEqual(1);
            expect(result.root.left).toEqual(null);
            expect(result.root.right).toEqual(null);
        });

        it('arranges the values correctly', () => {
            const tree = new BinarySearchTree();

            tree.insert(5);
            tree.insert(9);
            tree.insert(10);
            tree.insert(0);
            const result = tree.insert(2);

            expect(result).toEqual(tree);
            expect(result.root.value).toEqual(5);
            expect(result.root.left.value).toEqual(0);
            expect(result.root.left.left).toEqual(null);
            expect(result.root.left.right.value).toEqual(2);
            expect(result.root.left.right.left).toEqual(null);
            expect(result.root.left.right.right).toEqual(null);
            expect(result.root.right.value).toEqual(9);
            expect(result.root.right.left).toEqual(null);
            expect(result.root.right.right.value).toEqual(10);
            expect(result.root.right.right.left).toEqual(null);
            expect(result.root.right.right.right).toEqual(null);
        });
    });

    describe('remove', () => {
        it('returns undefined if trying to remove a node from an empty tree', () => {
        });

        it('removes a single node from a tree', () => {
        });

        it('removes a node from a tree and rearranges the other nodes correctly', () => {
        });
    });

    describe('find', () => {
        it('returns undefined if there are no nodes', () => {
        });

        it('finds a node if it is a root of the tree', () => {

        });

        it('finds a node on the left side of the tree', () => {

        });

        it('finds a node on the right side of the tree', () => {

        });
    });
});