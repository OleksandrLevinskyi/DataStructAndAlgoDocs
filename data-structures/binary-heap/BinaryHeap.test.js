const {BinaryHeap} = require("./BinaryHeap");

describe('binary heap', () => {
    describe('insert', () => {
        it('adds a value to an empty list', () => {
            const binaryHeap = new BinaryHeap();

            const result = binaryHeap.insert(1);

            expect(result[0]).toEqual(1);
        });

        it('adds a bigger value and places it as a root', () => {
            const binaryHeap = new BinaryHeap();

            binaryHeap.insert(1);
            const result = binaryHeap.insert(2);

            expect(result[0]).toEqual(2);
            expect(result[1]).toEqual(1);
        });

        it('adds a smaller value and places it under a root', () => {
            const binaryHeap = new BinaryHeap();

            binaryHeap.insert(1);
            const result = binaryHeap.insert(0);

            expect(result[0]).toEqual(1);
            expect(result[1]).toEqual(0);
        });

        it('arranges values correctly', () => {
            const binaryHeap = new BinaryHeap();

            binaryHeap.insert(5);
            binaryHeap.insert(3);
            binaryHeap.insert(7);
            binaryHeap.insert(10);
            binaryHeap.insert(0);
            binaryHeap.insert(2);
            const result = binaryHeap.insert(6);

            expect(result[0]).toEqual(10);
            expect(result[1]).toEqual(7);
            expect(result[2]).toEqual(6);
            expect(result[3]).toEqual(3);
            expect(result[4]).toEqual(0);
            expect(result[5]).toEqual(2);
            expect(result[6]).toEqual(5);
        });
    });

    describe('extractMax', () => {

    });
});
