function hasCycle(head: ListNode | null): boolean {
    if(head == null) return false;
    let slow = head;
    let fast = head;
    while(fast!=null && fast.next != null){
        slow = slow.next;
        fast = fast.next.next;

        if(slow == fast){
            return true;
        }
    }
    return false;
};