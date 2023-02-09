// TIME: O(n) - loop over each node in a linked list
// SPACE: O(n) - for pointers
const swapNodes = (head, k) => {
    let beginNode = head;
    let endNode = head;
    let tempNode = head;
    
    if (head.next === null) {
        return head;
    }
    
    for (let i = 1; i < k; i++) {
        beginNode = beginNode.next;
    }
    
    tempNode = beginNode;
    
    while (tempNode.next !== null) {
        tempNode = tempNode.next;
        endNode = endNode.next;
    }
    
    [beginNode.val, endNode.val] = [endNode.val, beginNode.val];
    
    return head;
};
