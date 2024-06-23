class ListNode {
    val: number;
    next: ListNode | null;
    constructor(v) {
        this.val = v;
        this.next = null;
    }
}

class LinkedList {
    private head: ListNode | null;
    private tail: ListNode | null;
    private size: number;
    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }
    getSize = function (): number { // TC: O(1)
        return this.size;
    };

    addFirst = function (val) { // TC: O(1)
        let nn = new ListNode(val);
        if (this.size == 0) {
            this.head = nn;
            this.tail = nn;
        } else {
            nn.next = this.head;
            this.head = nn;
        }
        this.size++;
    };

    display = function () { // TC: O(N)
        let temp = this.head;
        let s = "";
        while (temp != null) {
            s += temp.val + " -> ";
            temp = temp.next;
        }
        s += "null";
        console.log(s + "\nAnd the total size is: " + this.size);
    };

    addLast = function (val) {// TC: O(1)
        let nn = new ListNode(val);
        if (this.size == 0) {
            this.head = nn;
            this.tail = nn;
        } else {
            this.tail.next = nn;
            this.tail = nn;
        }
        this.size++;
    };

    removeFirst = function (): number { // TC: O(1)
        if (this.size == 0) {
            console.log("Linkedlist already empty!");
            return -1;
        }
        if (this.size == 1) {
            let val = this.head.val;
            this.head = null;
            this.tail = null;
            this.size--;
            return val;
        }
        let val = this.head.val;
        this.head = this.head.next;
        this.size--;
        return val;
    };

    removeLast = function (): number { // TC: O(N)
        if (this.size == 0) {
            console.log("Linkedlist already empty!");
            return -1;
        }
        if (this.size == 1) {
            let val = this.tail.val;
            this.head = null;
            this.tail = null;
            this.size--;
            return val;
        }
        let val = this.tail.val;
        let temp = this.head;
        while (temp.next != this.tail) {
            temp = temp.next;
        }
        temp.next = null;
        this.tail = temp;
        this.size--;
        return val;
    };

    getAt = function (idx): ListNode | null { // TC: O(N)
        if (idx < 0 || idx >= this.size) {
            console.log("Invalid index!");
            return null;
        }

        let temp = this.head;
        let i = 0;
        while (i < idx) {
            temp = temp.next;
            i++;
        }
        return temp;
    };

    addAt = function (idx, val) { // TC: O(N)
        if (idx < 0 || idx > this.size) {
            console.log("Invalid Index!");
            return;
        } else if (idx == 0) {
            this.addFirst(val);
            return;
        } else if (idx == this.size) {
            this.addLast(val);
            return;
        }
        // For rest of the cases
        let temp = this.getAt(idx - 1);
        let nn = new ListNode(val);
        nn.next = temp.next;
        temp.next = nn;
        this.size++;
    };

    removeAt = function (idx): number { // TC: O(N)
        if (idx < 0 || idx >= this.size) {
            console.log("Invalid index!");
            return -1;
        } else if (idx == 0) {
            return this.removeFirst();
        } else if (idx == this.size - 1) {
            return this.removeLast();
        }
        let temp = this.getAt(idx - 1);
        let retVal = temp.next.val;
        temp.next = temp.next.next;
        this.size--;
        return retVal;
    };
}

let myLL = new LinkedList();
myLL.addLast(10);
myLL.addLast(20);
myLL.addLast(30);
myLL.addLast(40);
myLL.addLast(50); // 10,20,30,40,50
myLL.addAt(2, 100); // 10,20,100,30,40,50
console.log("removed", myLL.removeAt(3));

myLL.display(); // // 10,20,100,40,50
