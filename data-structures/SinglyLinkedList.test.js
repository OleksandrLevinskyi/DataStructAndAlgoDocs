const {SinglyLinkedList} = require("./SinglyLinkedList");

describe('singly linked list', () => {
    describe('push', () => {
        it('adds node to empty list', () => {
            const list = new SinglyLinkedList();

            list.push(1);

            expect(list.length).toEqual(1);
            expect(list.head.value).toEqual(1);
            expect(list.head.next).toEqual(null);
            expect(list.tail.value).toEqual(1);
            expect(list.tail.next).toEqual(null);
        });

        it('can add multiple nodes', () => {
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
});