// TIME: O(n)
// SPACE: O(n)
const insert = (intervals, newInterval) => {
    const result = [];
    let newIntervalStart = newInterval[0];
    let newIntervalEnd = newInterval[newInterval.length - 1];
    let i = 0;

    while (i < intervals.length && intervals[i][intervals[i].length - 1] < newIntervalStart) {
        result.push(intervals[i]);
        i++;
    }

    while (i < intervals.length && intervals[i][0] <= newIntervalEnd) {
        newIntervalStart = Math.min(intervals[i][0], newIntervalStart);
        newIntervalEnd = Math.max(intervals[i][intervals[i].length - 1], newIntervalEnd);
        i++;
    }

    result.push([newIntervalStart, newIntervalEnd]);

    while (i < intervals.length){
        result.push(intervals[i]);
        i++;
    }

    return result;
}
