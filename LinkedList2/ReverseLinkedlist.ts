function reverseList(head: ListNode | null): ListNode | null {
    if(head == null) return null;
    
    let prev = null;
    let curr = head;
    let next = head.next;

    while(curr != null){
        curr.next = prev;  

        prev = curr;
        curr = next;
        if(next!=null){
            next = next.next;
        }
    }
    head = prev;
    return head;
};

