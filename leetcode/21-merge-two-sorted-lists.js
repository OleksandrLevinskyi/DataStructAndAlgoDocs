// TIME: O(n)
// SPACE: O(1)
const mergeTwoLists = (list1, list2) => {
    let result = new ListNode();
    let a = list1;
    let b = list2;
    let c = result;

    if (!list1) {
        return list2;
    }

    if (!list2) {
        return list1;
    }

    while (a !== null && b !== null) {
        if (a.val < b.val) {
            c.next = a;
            a = a.next;
        } else {
            c.next = b;
            b = b.next;
        }

        c = c.next;
    }

    if (a !== null) {
        c.next = a;
    } else {
        c.next = b;
    }

    return result.next;
}
