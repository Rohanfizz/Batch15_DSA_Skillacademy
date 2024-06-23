
function middleNode(head: ListNode | null): ListNode | null {
    let slow = head;
    let fast = head;

    while(fast != null && fast.next != null){
        slow = slow.next;
        fast = fast.next.next;
    }
    
    return slow;
};

