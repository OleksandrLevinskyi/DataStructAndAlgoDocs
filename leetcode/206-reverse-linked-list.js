// TIME: O(n)
// SPACE: O(1)
const reverseList = (head) => {
    let prev = null;
    let temp = null;

    while (head !== null) {
        temp = head.next;
        head.next = prev;
        prev = head;
        head = temp;
    }

    return prev;
}
