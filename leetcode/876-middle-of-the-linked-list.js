// TIME: O(n)
// SPACE: O(1)
const middleNode = (head) => {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}
