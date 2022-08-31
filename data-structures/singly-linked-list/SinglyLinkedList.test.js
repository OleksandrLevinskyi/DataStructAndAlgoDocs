const {SinglyLinkedList} = require("./SinglyLinkedList");

describe('singly linked list', () => {
    describe('push', () => {
        it('adds a node to an empty list', () => {
            const list = new SinglyLinkedList();

            list.push(1);

            expect(list.length).toEqual(1);
            expect(list.head.value).toEqual(1);
            expect(list.head.next).toEqual(null);
            expect(list.tail).toEqual(list.head);
        });

        it('adds multiple nodes to the end', () => {
            const list = new SinglyLinkedList();

            list.push(1);
            list.push(2);
            list.push(3);

            expect(list.length).toEqual(3);
            expect(list.head.value).toEqual(1);
            expect(list.head.next.value).toEqual(2);
            expect(list.tail.value).toEqual(3);
            expect(list.tail.next).toEqual(null);
        });
    });

    describe('pop', () => {
        it('returns undefined for a list with no nodes', () => {
            const list = new SinglyLinkedList();

            const result = list.pop();

            expect(result).toEqual(undefined);
            expect(list.length).toEqual(0);
            expect(list.head).toEqual(null);
            expect(list.tail).toEqual(null);
        });

        it('removes the only node from a list', function () {
            const list = new SinglyLinkedList();
            list.push(1);


            const result = list.pop();

            expect(result).toEqual(1);
            expect(list.length).toEqual(0);
            expect(list.head).toEqual(null);
            expect(list.tail).toEqual(null);
        });

        it('removes a node from the end', function () {
            const list = new SinglyLinkedList();
            list.push(1);
            list.push(2);
            list.push(3);

            const result = list.pop();

            expect(result).toEqual(3);
            expect(list.length).toEqual(2);
            expect(list.head.value).toEqual(1);
            expect(list.tail.value).toEqual(2);
        });
    });

    describe('unshift', () => {
        it('adds a node to an empty list', () => {
            const list = new SinglyLinkedList();

            list.unshift(1);

            expect(list.length).toEqual(1);
            expect(list.head.value).toEqual(1);
            expect(list.head.next).toEqual(null);
            expect(list.tail).toEqual(list.head);
        });

        it('adds multiple nodes to the beginning', () => {
            const list = new SinglyLinkedList();

            list.unshift(1);
            list.unshift(2);
            list.unshift(3);

            expect(list.length).toEqual(3);
            expect(list.head.value).toEqual(3);
            expect(list.head.next.value).toEqual(2);
            expect(list.tail.value).toEqual(1);
            expect(list.tail.next).toEqual(null);
        });
    });

    describe('shift', () => {
        it('returns undefined for a list with no nodes', () => {
            const list = new SinglyLinkedList();

            const result = list.shift();

            expect(result).toEqual(undefined);
            expect(list.length).toEqual(0);
            expect(list.head).toEqual(null);
            expect(list.tail).toEqual(null);
        });

        it('removes the only node from a list', function () {
            const list = new SinglyLinkedList();
            list.push(1);

            const result = list.shift();

            expect(result).toEqual(1);
            expect(list.length).toEqual(0);
            expect(list.head).toEqual(null);
            expect(list.tail).toEqual(null);
        });

        it('removes a node', function () {
            const list = new SinglyLinkedList();
            list.push(1);
            list.push(2);
            list.push(3);

            const result = list.shift();

            expect(result).toEqual(1);
            expect(list.length).toEqual(2);
            expect(list.head).toEqual(2);
            expect(list.tail).toEqual(3);
        });
    });

    describe('get', () => {
        it('returns undefined in case a list is empty', () => {
            const list = new SinglyLinkedList();

            const result = list.get(0);

            expect(result).toEqual(undefined);
        });

        it('returns undefined in case a given idx is less than 0', () => {
            const list = new SinglyLinkedList();
            list.push(1);

            const result = list.get(-1);

            expect(result).toEqual(undefined);
        });

        it('returns undefined in case a given idx is greater that a list\'s scope', () => {
            const list = new SinglyLinkedList();
            list.push(1);

            const result = list.get(2);

            expect(result).toEqual(undefined);
        });

        it('returns a value under a specified index in a list', () => {
            const list = new SinglyLinkedList();
            list.push(1);
            list.push(2);
            list.push(3);

            const result = list.get(2);

            expect(result).toEqual(3);
        });
    });

    describe('set', () => {
        it('returns false in case a given idx is less than 0', () => {
            const list = new SinglyLinkedList();
            list.push(1);

            const result = list.set(-1, 1);

            expect(result).toEqual(false);
        });

        it('returns false in case a given idx is greater that a list\'s scope', () => {
            const list = new SinglyLinkedList();
            list.push(1);

            const result = list.set(2, 2);

            expect(result).toEqual(false);
        });

        it('updates a node\'s value with a given one', () => {
            const list = new SinglyLinkedList();
            list.push(1);
            list.push(2);
            list.push(3);

            const result = list.set(1, 10);

            expect(result).toEqual(true);
            expect(list.head.value).toEqual(1);
            expect(list.head.next.value).toEqual(10);
            expect(list.head.next.next).toEqual(list.tail);
        });
    });

    describe('insert', () => {
        it('returns false in case a given idx is less than 0', () => {
            const list = new SinglyLinkedList();
            list.push(1);

            const result = list.insert(-1, 2);

            expect(result).toEqual(false);
            expect(list.head.value).toEqual(1);
            expect(list.tail.value).toEqual(1);
        });

        it('returns false in case a given idx is greater that a list\'s length', () => {
            const list = new SinglyLinkedList();
            list.push(1);

            const result = list.insert(2, 2);

            expect(result).toEqual(false);
            expect(list.head.value).toEqual(1);
            expect(list.tail.value).toEqual(1);
        });

        it('inserts a node with a given value to the beginning', () => {
            const list = new SinglyLinkedList();
            list.push(1);

            const result = list.insert(0, 2);

            expect(result).toEqual(true);
            expect(list.head.value).toEqual(2);
            expect(list.tail.value).toEqual(1);
        });

        it('inserts a node with a given value to the end', () => {
            const list = new SinglyLinkedList();
            list.push(1);

            const result = list.insert(1, 2);

            expect(result).toEqual(true);
            expect(list.head.value).toEqual(1);
            expect(list.tail.value).toEqual(2);
        });

        it('inserts a node with a given value to the specified index', () => {
            const list = new SinglyLinkedList();
            list.push(1);
            list.push(3);

            const result = list.insert(1, 2);

            expect(result).toEqual(true);
            expect(list.head.value).toEqual(1);
            expect(list.head.next.value).toEqual(2);
            expect(list.tail.value).toEqual(3);
        });
    });

    describe('remove', () => {
        it('returns undefined in case a given idx is less than 0', () => {
            const list = new SinglyLinkedList();
            list.push(1);

            const result = list.remove(-1);

            expect(result).toEqual(false);
            expect(list.head.value).toEqual(1);
            expect(list.tail.value).toEqual(1);
        });

        it('returns undefined in case a given idx is greater that a list\'s length', () => {
            const list = new SinglyLinkedList();
            list.push(1);

            const result = list.remove(2);

            expect(result).toEqual(false);
            expect(list.head.value).toEqual(1);
            expect(list.tail.value).toEqual(1);
        });

        it('can remove a node at the beginning', () => {
            const list = new SinglyLinkedList();
            list.push(1);
            list.push(2);

            const result = list.remove(0);

            expect(result).toEqual(true);
            expect(list.head.value).toEqual(2);
            expect(list.tail.value).toEqual(2);
        });

        it('can remove a node at the end', () => {
            const list = new SinglyLinkedList();
            list.push(1);
            list.push(2);

            const result = list.remove(1);

            expect(result).toEqual(true);
            expect(list.head.value).toEqual(1);
            expect(list.tail.value).toEqual(1);
        });

        it('remove a node at the specified index', () => {
            const list = new SinglyLinkedList();
            list.push(1);
            list.push(2);
            list.push(3);

            const result = list.insert(1);

            expect(result).toEqual(true);
            expect(list.head.value).toEqual(1);
            expect(list.head.next.value).toEqual(3);
            expect(list.tail.value).toEqual(3);
        });
    });

    describe('reverse', () => {
        it('reverses an empty list', () => {
            const list = new SinglyLinkedList();

            const result = list.reverse();

            expect(result).toEqual(list);
            expect(list.head).toEqual(null);
            expect(list.tail).toEqual(null);
        });

        it('reverses a list with one node', () => {
            const list = new SinglyLinkedList();
            list.push(1);

            const result = list.reverse();

            expect(result).toEqual(list);
            expect(list.head.value).toEqual(1);
            expect(list.head.next).toEqual(list.tail);
        });

        it('reverses a list', () => {
            const list = new SinglyLinkedList();
            list.push(1);
            list.push(2);
            list.push(3);

            const result = list.reverse();

            expect(result).toEqual(list);
            expect(list.head.value).toEqual(3);
            expect(list.head.next.value).toEqual(2);
            expect(list.head.next.next.value).toEqual(1);
        });
    });
});