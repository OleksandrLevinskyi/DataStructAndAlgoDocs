const {Stack} = require("./Stack");

describe('stack', () => {
    describe('push', () => {
        it('adds a node to an empty stack', () => {
            const stack = new Stack();

            const result = stack.push(1);

            expect(result).toEqual(stack);
            expect(stack.size).toEqual(1);
            expect(stack.first.value).toEqual(1);
            expect(stack.first.next).toEqual(null);
            expect(stack.last).toEqual(stack.first);
        });

        it('adds multiple nodes to the beginning', () => {
            const stack = new Stack();

            stack.push(1);
            stack.push(2);
            stack.push(3);

            expect(stack.size).toEqual(3);
            expect(stack.first.value).toEqual(3);
            expect(stack.first.next.value).toEqual(2);
            expect(stack.last.value).toEqual(1);
            expect(stack.last.next).toEqual(null);
        });
    });

    describe('pop', () => {
        it('returns undefined for a stack with no nodes', () => {
            const stack = new Stack();

            const result = stack.pop();

            expect(result).toEqual(undefined);
            expect(stack.size).toEqual(0);
            expect(stack.first).toEqual(null);
            expect(stack.last).toEqual(null);
        });

        it('removes the only node from a stack', function () {
            const stack = new Stack();

            stack.push(1);

            const result = stack.pop();

            expect(result).toEqual(1);
            expect(stack.size).toEqual(0);
            expect(stack.first).toEqual(null);
            expect(stack.last).toEqual(null);
        });

        it('removes a node', function () {
            const stack = new Stack();

            stack.push(1);
            stack.push(2);
            stack.push(3);

            const result = stack.pop();

            expect(result).toEqual(3);
            expect(stack.size).toEqual(2);
            expect(stack.first.value).toEqual(2);
            expect(stack.last.value).toEqual(1);
        });
    });
});
