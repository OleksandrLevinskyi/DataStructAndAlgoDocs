const {Queue} = require("./Queue");

describe('queue', () => {
    describe('enqueue', () => {
        it('adds a node to an empty queue', () => {
            const queue = new Queue();

            const result = queue.enqueue(1);

            expect(result).toEqual(queue);
            expect(queue.size).toEqual(1);
            expect(queue.first.value).toEqual(1);
            expect(queue.first.next).toEqual(null);
            expect(queue.last).toEqual(queue.first);
        });

        it('adds multiple nodes to the end', () => {
            const queue = new Queue();

            queue.enqueue(1);
            queue.enqueue(2);
            queue.enqueue(3);

            expect(queue.size).toEqual(3);
            expect(queue.first.value).toEqual(1);
            expect(queue.first.next.value).toEqual(2);
            expect(queue.last.value).toEqual(3);
            expect(queue.last.next).toEqual(null);
        });
    });

    describe('dequeue', () => {
        it('returns undefined for a queue with no nodes', () => {
            const queue = new Queue();

            const result = queue.dequeue();

            expect(result).toEqual(undefined);
            expect(queue.size).toEqual(0);
            expect(queue.first).toEqual(null);
            expect(queue.last).toEqual(null);
        });

        it('removes the only node from a queue', function () {
            const queue = new Queue();
            queue.enqueue(1);

            const result = queue.dequeue();

            expect(result).toEqual(1);
            expect(queue.size).toEqual(0);
            expect(queue.first).toEqual(null);
            expect(queue.last).toEqual(null);
        });

        it('removes a node', function () {
            const queue = new Queue();
            queue.enqueue(1);
            queue.enqueue(2);
            queue.enqueue(3);

            const result = queue.dequeue();

            expect(result).toEqual(1);
            expect(queue.size).toEqual(2);
            expect(queue.first.value).toEqual(2);
            expect(queue.last.value).toEqual(3);
        });
    });
});
