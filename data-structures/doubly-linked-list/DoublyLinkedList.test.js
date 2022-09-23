const {DoublyLinkedList} = require("./DoublyLinkedList");

describe('doubly linked list', () => {
    describe('push', () => {
        it('adds a node to an empty list', () => {
            const list = new DoublyLinkedList();

            const result = list.push(1);

            expect(result).toEqual(list);
            expect(list.length).toEqual(1);

            expect(list.head.value).toEqual(1);
            expect(list.head.prev).toEqual(null);
            expect(list.head.next).toEqual(null);

            expect(list.tail).toEqual(list.head);
        });

        it('adds multiple nodes to the end', () => {
            const list = new DoublyLinkedList();

            list.push(1);
            list.push(2);
            list.push(3);

            expect(list.length).toEqual(3);

            expect(list.head.value).toEqual(1);
            expect(list.head.prev).toEqual(null);

            expect(list.head.next.value).toEqual(2);
            expect(list.head.next.prev).toEqual(list.head);
            expect(list.head.next.next).toEqual(list.tail);

            expect(list.tail.value).toEqual(3);
            expect(list.tail.prev).toEqual(list.head.next);
            expect(list.tail.next).toEqual(null);
        });
    });

    describe('pop', () => {
        it('returns undefined for a list with no nodes', () => {
            const list = new DoublyLinkedList();

            const result = list.pop();

            expect(result).toEqual(undefined);
            expect(list.length).toEqual(0);

            expect(list.head).toEqual(null);
            expect(list.tail).toEqual(null);
        });

        it('removes the only node from a list', function () {
            const list = new DoublyLinkedList();
            list.push(1);


            const result = list.pop();

            expect(result).toEqual(1);
            expect(list.length).toEqual(0);

            expect(list.head).toEqual(null);
            expect(list.tail).toEqual(null);
        });

        it('removes a node from the end', function () {
            const list = new DoublyLinkedList();
            list.push(1);
            list.push(2);
            list.push(3);

            const result = list.pop();

            expect(result).toEqual(3);
            expect(list.length).toEqual(2);

            expect(list.head.value).toEqual(1);
            expect(list.head.prev).toEqual(null);
            expect(list.head.next).toEqual(list.tail);

            expect(list.tail.value).toEqual(2);
            expect(list.tail.prev).toEqual(list.head);
            expect(list.tail.next).toEqual(null);
        });
    });

    describe('unshift', () => {
        it('adds a node to an empty list', () => {
            const list = new DoublyLinkedList();

            const result = list.unshift(1);

            expect(result).toEqual(list);
            expect(list.length).toEqual(1);

            expect(list.head.value).toEqual(1);
            expect(list.head.prev).toEqual(null);
            expect(list.head.next).toEqual(null);

            expect(list.tail).toEqual(list.head);
        });

        it('adds multiple nodes to the beginning', () => {
            const list = new DoublyLinkedList();

            list.unshift(1);
            list.unshift(2);
            list.unshift(3);

            expect(list.length).toEqual(3);

            expect(list.head.value).toEqual(3);
            expect(list.head.prev).toEqual(null);

            expect(list.head.next.value).toEqual(2);
            expect(list.head.next.prev).toEqual(list.head);
            expect(list.head.next.next).toEqual(list.tail);

            expect(list.tail.value).toEqual(1);
            expect(list.tail.prev).toEqual(list.head.next);
            expect(list.tail.next).toEqual(null);
        });
    });

    describe('shift', () => {
        it('returns undefined for a list with no nodes', () => {
            const list = new DoublyLinkedList();

            const result = list.shift();

            expect(result).toEqual(undefined);
            expect(list.length).toEqual(0);

            expect(list.head).toEqual(null);
            expect(list.tail).toEqual(null);
        });

        it('removes the only node from a list', function () {
            const list = new DoublyLinkedList();
            list.push(1);

            const result = list.shift();

            expect(result).toEqual(1);
            expect(list.length).toEqual(0);

            expect(list.head).toEqual(null);
            expect(list.tail).toEqual(null);
        });

        it('removes a node', function () {
            const list = new DoublyLinkedList();
            list.push(1);
            list.push(2);
            list.push(3);

            const result = list.shift();

            expect(result).toEqual(1);
            expect(list.length).toEqual(2);

            expect(list.head.value).toEqual(2);
            expect(list.head.prev).toEqual(null);
            expect(list.head.next).toEqual(list.tail);

            expect(list.tail.value).toEqual(3);
            expect(list.tail.prev).toEqual(list.head);
            expect(list.tail.next).toEqual(null);
        });
    });

    describe('get', () => {
        it('returns undefined in case a list is empty', () => {
            const list = new DoublyLinkedList();

            const result = list.get(0);

            expect(result).toEqual(undefined);
            expect(list.length).toEqual(0);
        });

        it('returns undefined in case a given idx is less than 0', () => {
            const list = new DoublyLinkedList();
            list.push(1);

            const result = list.get(-1);

            expect(result).toEqual(undefined);
            expect(list.length).toEqual(1);
        });

        it('returns undefined in case a given idx is greater that a list\'s scope', () => {
            const list = new DoublyLinkedList();
            list.push(1);

            const result = list.get(1);

            expect(result).toEqual(undefined);
            expect(list.length).toEqual(1);
        });

        it('returns a node under a specified index in a list (located in the first list half)', () => {
            const list = new DoublyLinkedList();
            list.push(1);
            list.push(2);
            list.push(3);
            list.push(4);

            const result = list.get(1);

            expect(result.value).toEqual(2);
            expect(result.prev.value).toEqual(1);
            expect(result.next.value).toEqual(3);
            expect(list.length).toEqual(4);
        });

        it('returns a node under a specified index in a list (located in the second list half)', () => {
            const list = new DoublyLinkedList();
            list.push(1);
            list.push(2);
            list.push(3);
            list.push(4);

            const result = list.get(2);

            expect(result.value).toEqual(3);
            expect(result.prev.value).toEqual(2);
            expect(result.next.value).toEqual(4);
            expect(list.length).toEqual(4);
        });

        it('returns a node under a specified index in a list (located in the middle of the list)', () => {
            const list = new DoublyLinkedList();
            list.push(1);
            list.push(2);
            list.push(3);
            list.push(4);
            list.push(5);

            const result = list.get(2);

            expect(result.value).toEqual(3);
            expect(result.prev.value).toEqual(2);
            expect(result.next.value).toEqual(4);
            expect(list.length).toEqual(5);
        });
    });

    describe('set', () => {
        it('returns false in case a given idx is less than 0', () => {
            const list = new DoublyLinkedList();
            list.push(1);

            const result = list.set(-1, 1);

            expect(result).toEqual(false);
            expect(list.length).toEqual(1);
        });

        it('returns false in case a given idx is greater that a list\'s scope', () => {
            const list = new DoublyLinkedList();
            list.push(1);

            const result = list.set(1, 2);

            expect(result).toEqual(false);
            expect(list.length).toEqual(1);
        });

        it('updates a node\'s value with a given one', () => {
            const list = new DoublyLinkedList();
            list.push(1);
            list.push(2);
            list.push(3);

            const result = list.set(1, 10);

            expect(result).toEqual(true);
            expect(list.length).toEqual(3);

            expect(list.head.value).toEqual(1);
            expect(list.head.prev).toEqual(null);

            expect(list.head.next.value).toEqual(10);
            expect(list.head.next.prev).toEqual(list.head);
            expect(list.head.next.next).toEqual(list.tail);

            expect(list.tail.value).toEqual(3);
            expect(list.tail.prev).toEqual(list.head.next);
            expect(list.tail.next).toEqual(null);
        });
    });

    describe('insert', () => {
        it('returns false in case a given idx is less than 0', () => {
            const list = new DoublyLinkedList();
            list.push(1);

            const result = list.insert(-1, 2);

            expect(result).toEqual(false);
            expect(list.length).toEqual(1);

            expect(list.head.value).toEqual(1);
            expect(list.head.prev).toEqual(null);
            expect(list.head.next).toEqual(null);
            expect(list.tail).toEqual(list.head);
        });

        it('returns false in case a given idx is greater that a list\'s length', () => {
            const list = new DoublyLinkedList();
            list.push(1);

            const result = list.insert(2, 2);

            expect(result).toEqual(false);
            expect(list.length).toEqual(1);

            expect(list.head.value).toEqual(1);
            expect(list.head.prev).toEqual(null);
            expect(list.head.next).toEqual(null);
            expect(list.tail).toEqual(list.head);
        });

        it('inserts a node with a given value to the beginning', () => {
            const list = new DoublyLinkedList();
            list.push(1);

            const result = list.insert(0, 2);

            expect(result).toEqual(true);
            expect(list.length).toEqual(2);

            expect(list.head.value).toEqual(2);
            expect(list.head.prev).toEqual(null);
            expect(list.head.next).toEqual(list.tail);

            expect(list.tail.value).toEqual(1);
            expect(list.tail.prev).toEqual(list.head);
            expect(list.tail.next).toEqual(null);
        });

        it('inserts a node with a given value to the end', () => {
            const list = new DoublyLinkedList();
            list.push(1);

            const result = list.insert(1, 2);

            expect(result).toEqual(true);
            expect(list.length).toEqual(2);

            expect(list.head.value).toEqual(1);
            expect(list.head.prev).toEqual(null);
            expect(list.head.next).toEqual(list.tail);

            expect(list.tail.value).toEqual(2);
            expect(list.tail.prev).toEqual(list.head);
            expect(list.tail.next).toEqual(null);
        });

        it('inserts a node with a given value to the specified index', () => {
            const list = new DoublyLinkedList();
            list.push(1);
            list.push(3);

            const result = list.insert(1, 2);

            expect(result).toEqual(true);
            expect(list.length).toEqual(3);

            expect(list.head.value).toEqual(1);
            expect(list.head.prev).toEqual(null);

            expect(list.head.next.value).toEqual(2);
            expect(list.head.next.prev).toEqual(list.head);
            expect(list.head.next.next).toEqual(list.tail);

            expect(list.tail.value).toEqual(3);
            expect(list.tail.prev).toEqual(list.head.next);
            expect(list.tail.next).toEqual(null);
        });
    });

    describe('remove', () => {
        it('returns undefined in case a given idx is less than 0', () => {
            const list = new DoublyLinkedList();
            list.push(1);

            const result = list.remove(-1);

            expect(result).toEqual(undefined);
            expect(list.length).toEqual(1);

            expect(list.head.value).toEqual(1);
            expect(list.head.prev).toEqual(null);
            expect(list.head.next).toEqual(null);
            expect(list.tail).toEqual(list.head);
        });

        it('returns undefined in case a given idx is greater that a last node\'s idx', () => {
            const list = new DoublyLinkedList();
            list.push(1);

            const result = list.remove(1);

            expect(result).toEqual(undefined);
            expect(list.length).toEqual(1);

            expect(list.head.value).toEqual(1);
            expect(list.head.prev).toEqual(null);
            expect(list.head.next).toEqual(null);
            expect(list.tail).toEqual(list.head);
        });

        it('can remove a node at the beginning', () => {
            const list = new DoublyLinkedList();
            list.push(1);
            list.push(2);

            const result = list.remove(0);

            expect(result).toEqual(1);
            expect(list.length).toEqual(1);

            expect(list.head.value).toEqual(2);
            expect(list.head.prev).toEqual(null);
            expect(list.head.next).toEqual(null);
            expect(list.tail).toEqual(list.head);
        });

        it('can remove a node at the end', () => {
            const list = new DoublyLinkedList();
            list.push(1);
            list.push(2);

            const result = list.remove(1);

            expect(result).toEqual(2);
            expect(list.length).toEqual(1);

            expect(list.head.value).toEqual(1);
            expect(list.head.prev).toEqual(null);
            expect(list.head.next).toEqual(null);
            expect(list.tail).toEqual(list.head);
        });

        it('remove a node at the specified index', () => {
            const list = new DoublyLinkedList();
            list.push(1);
            list.push(2);
            list.push(3);

            const result = list.remove(1);

            expect(result).toEqual(2);
            expect(list.length).toEqual(2);

            expect(list.head.value).toEqual(1);
            expect(list.head.prev).toEqual(null);

            expect(list.head.next.value).toEqual(3);
            expect(list.head.next.prev).toEqual(list.head);
            expect(list.head.next.next).toEqual(list.tail);

            expect(list.tail.value).toEqual(3);
            expect(list.tail.prev).toEqual(list.head.next);
            expect(list.tail.next).toEqual(null);
        });
    });

    describe('reverse', () => {
        it('reverses an empty list', () => {
            const list = new DoublyLinkedList();

            const result = list.reverse();

            expect(result).toEqual(list);
            expect(list.length).toEqual(0);
            expect(list.head).toEqual(null);
            expect(list.tail).toEqual(null);
        });

        it('reverses a list with one node', () => {
            const list = new DoublyLinkedList();
            list.push(1);

            const result = list.reverse();

            expect(result).toEqual(list);
            expect(list.length).toEqual(1);

            expect(list.head.value).toEqual(1);
            expect(list.head).toEqual(null);
            expect(list.tail).toEqual(null);
            expect(list.head).toEqual(list.tail);
        });

        it('reverses a list', () => {
            const list = new DoublyLinkedList();
            list.push(1);
            list.push(2);
            list.push(3);
            list.push(4);

            const result = list.reverse();

            expect(result).toEqual(list);
            expect(list.length).toEqual(4);

            expect(list.head.value).toEqual(4);
            expect(list.head.prev).toEqual(null);

            expect(list.head.next.value).toEqual(3);
            expect(list.head.next.prev).toEqual(list.head);

            expect(list.head.next.next.value).toEqual(2);
            expect(list.head.next.next.prev).toEqual(list.head.next);
            expect(list.head.next.next.next).toEqual(list.tail);

            expect(list.tail.value).toEqual(1);
            expect(list.tail.prev).toEqual(list.head.next.next);
            expect(list.tail.next).toEqual(null);
        });
    });
});
