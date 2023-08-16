// TIME: O(klogn)
// SPACE: O(n)
const kClosest = (points, k) => {
    const heap = [];
    const result = [];
    let distance = 0;

    // build an array - O(n):
    for (let point of points) {
        distance = point[0] ** 2 + point[1] ** 2;
        heap.push({distance, point});
    }

    // heapify the array (starting from the last non-lead node) - O(n):
    // https://www.geeksforgeeks.org/building-heap-from-array/
    for (let i = Math.floor(heap.length / 2) - 1; i >= 0; i--) {
        heapify(heap, i);
    }

    // extract k smallest distances - O(klogn):
    for (let i = 0; i < k; i++) {
        result.push(extractMin(heap));
    }

    return result;
}

const heapify = (arr, i) => {
    let minValueIdx = i;
    let leftChildIdx = 2 * i + 1;
    let rightChildIdx = 2 * i + 2;

    if (leftChildIdx < arr.length && 
        arr[leftChildIdx].distance < arr[minValueIdx].distance) {
        minValueIdx = leftChildIdx;
    }

    if (rightChildIdx < arr.length && 
        arr[rightChildIdx].distance < arr[minValueIdx].distance) {
        minValueIdx = rightChildIdx;
    }

    if (minValueIdx !== i) {
        [arr[minValueIdx], arr[i]] = [arr[i], arr[minValueIdx]];
        heapify(arr, minValueIdx);
    }
}

const extractMin = (heap) => {
    let result;

    [heap[0], heap[heap.length - 1]] = [heap[heap.length - 1], heap[0]];
    result = heap.pop();

    heapify(heap, 0);

    return result.point;
}
