var ListNode = /** @class */ (function () {
    function ListNode(v) {
        this.val = v;
        this.next = null;
    }
    return ListNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.getSize = function () {
            return this.size;
        };
        this.addFirst = function (val) {
            var nn = new ListNode(val);
            if (this.size == 0) {
                this.head = nn;
                this.tail = nn;
            }
            else {
                nn.next = this.head;
                this.head = nn;
            }
            this.size++;
        };
        this.display = function () {
            var temp = this.head;
            var s = "";
            while (temp != null) {
                s += temp.val + " -> ";
                temp = temp.next;
            }
            s += "null";
            console.log(s + "\nAnd the total size is: " + this.size);
        };
        this.addLast = function (val) {
            var nn = new ListNode(val);
            if (this.size == 0) {
                this.head = nn;
                this.tail = nn;
            }
            else {
                this.tail.next = nn;
                this.tail = nn;
            }
            this.size++;
        };
        this.removeFirst = function () {
            if (this.size == 0) {
                console.log("Linkedlist already empty!");
                return -1;
            }
            if (this.size == 1) {
                var val_1 = this.head.val;
                this.head = null;
                this.tail = null;
                this.size--;
                return val_1;
            }
            var val = this.head.val;
            this.head = this.head.next;
            this.size--;
            return val;
        };
        this.removeLast = function () {
            if (this.size == 0) {
                console.log("Linkedlist already empty!");
                return -1;
            }
            if (this.size == 1) {
                var val_2 = this.tail.val;
                this.head = null;
                this.tail = null;
                this.size--;
                return val_2;
            }
            var val = this.tail.val;
            var temp = this.head;
            while (temp.next != this.tail) {
                temp = temp.next;
            }
            temp.next = null;
            this.tail = temp;
            this.size--;
            return val;
        };
        this.getAt = function (idx) {
            if (idx < 0 || idx >= this.size) {
                console.log("Invalid index!");
                return null;
            }
            var temp = this.head;
            var i = 0;
            while (i < idx) {
                temp = temp.next;
                i++;
            }
            return temp;
        };
        this.size = 0;
        this.head = null;
        this.tail = null;
    }
    return LinkedList;
}());
var myLL = new LinkedList();
myLL.addFirst(10);
myLL.addFirst(20);
myLL.addFirst(30);
myLL.addLast(100);
console.log(myLL.removeLast() + " removed"); // 100
myLL.display(); // 30 -> 20 -> 10 -> null
console.log(myLL.getAt(2).val);
