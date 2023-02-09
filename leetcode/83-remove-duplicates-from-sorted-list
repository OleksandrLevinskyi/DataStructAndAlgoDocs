// TIME: O(n) - loop over each node in a linked list
// SPACE: O(1) - for curr pointer
const deleteDuplicates = (head) => {
    let curr = head;
    
    while (curr !== null && curr.next !== null) {
        if (curr.val === curr.next.val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }
    
    return head;
}; 
