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
    getSize = function (): number {
        return this.size;
    };

    addFirst = function (val) {
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

    display = function () {
        let temp = this.head;
        let s = "";
        while (temp != null) {
            s += temp.val + " -> ";
            temp = temp.next;
        }
        s += "null";
        console.log(s + "\nAnd the total size is: " + this.size);
    };

    addLast = function (val) {
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

    removeFirst = function (): number {
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

    removeLast = function (): number {
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

    getAt = function (idx): ListNode | null {
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
}

let myLL = new LinkedList();
myLL.addFirst(10);
myLL.addFirst(20);
myLL.addFirst(30);
myLL.addLast(100);
console.log(myLL.removeLast() + " removed"); // 100
myLL.display(); // 30 -> 20 -> 10 -> null

console.log(myLL.getAt(2).val);
