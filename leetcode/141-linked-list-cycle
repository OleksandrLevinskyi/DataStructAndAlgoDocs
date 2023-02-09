// TIME: O(n) - loop over each node in a linked list
// SPACE: O(1) - for fast and slow pointers
const hasCycle = (head) => {
    let fast = head;
    let slow = head;
    
    if (head === null || head.next === null){
        return false;
    }
    
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
        
        if (fast === slow) {
            return true;
        }
    }
    
    return false;
};
