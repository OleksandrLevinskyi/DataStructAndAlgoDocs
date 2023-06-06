// TIME: O(nlogn)
// SPACE: O(n)
const merge = (intervals) => {
    intervals.sort((a, b) => a[0] - b[0]);

    let temp = intervals[0];
    const result = [temp];

    for (let interval of intervals) {
        if (interval[0] <= temp[1]) {
            temp[1] = Math.max(interval[1], temp[1]); // covers nested or overlapping intervals
        } else {
            temp = interval;
            result.push(temp);
        }
    }

    return result;
}
