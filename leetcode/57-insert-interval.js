// TIME: O(n)
// SPACE: O(n)
const insert = (intervals, newInterval) => {
    const result = [];
    let newIntervalStart = newInterval[0];
    let newIntervalEnd = newInterval[newInterval.length - 1];
    let i = 0;

    // push all the intervals before the overlap
    while (i < intervals.length && intervals[i][1] < newIntervalStart) {
        result.push(intervals[i]);
        i++;
    }

    // merge all overlapping intervals
    while (i < intervals.length && intervals[i][0] <= newIntervalEnd) {
        newIntervalStart = Math.min(newIntervalStart, intervals[i][0])
        newIntervalEnd = Math.max(newIntervalEnd, intervals[i][1]);
        i++;
    }

    result.push([newIntervalStart, newIntervalEnd]);

    // push all the intervals after the overlap
    while (i < intervals.length) {
        result.push(intervals[i]);
        i++;
    }

    return result;
}
