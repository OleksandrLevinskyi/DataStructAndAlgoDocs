// TIME: O(n)
// SPACE: O(n)
const merge = (intervals) => {
    intervals.sort((a, b) => a[0] - b[0]);

    let temp = intervals[0];
    const result = [temp];

    for (let interval of intervals) {
        // if overlapping, take the max value for the ending
        if (interval[0] <= temp[1]) {
            temp[1] = Math.max(temp[1], interval[1]);
        } else {
            temp = interval;
            result.push(temp);
        }
    }

    return result;
}
