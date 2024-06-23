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
        this.addAt = function (idx, val) {
            if (idx < 0 || idx > this.size) {
                console.log("Invalid Index!");
                return;
            }
            else if (idx == 0) {
                this.addFirst(val);
                return;
            }
            else if (idx == this.size) {
                this.addLast(val);
                return;
            }
            // For rest of the cases
            var temp = this.getAt(idx - 1);
            var nn = new ListNode(val);
            nn.next = temp.next;
            temp.next = nn;
            this.size++;
        };
        this.removeAt = function (idx) {
            if (idx < 0 || idx >= this.size) {
                console.log("Invalid index!");
                return -1;
            }
            else if (idx == 0) {
                return this.removeFirst();
            }
            else if (idx == this.size - 1) {
                return this.removeLast();
            }
            var temp = this.getAt(idx - 1);
            var retVal = temp.next.val;
            temp.next = temp.next.next;
            this.size--;
            return retVal;
        };
        this.size = 0;
        this.head = null;
        this.tail = null;
    }
    return LinkedList;
}());
var myLL = new LinkedList();
myLL.addLast(10);
myLL.addLast(20);
myLL.addLast(30);
myLL.addLast(40);
myLL.addLast(50); // 10,20,30,40,50
myLL.addAt(2, 100); // 10,20,100,30,40,50
console.log("removed", myLL.removeAt(3));
myLL.display(); // // 10,20,100,40,50
