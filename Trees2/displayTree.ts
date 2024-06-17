class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(v: number) {
        this.val = v;
        this.left = null;
        this.right = null;
    }
}

let arr = [5, 2, 4, -1, -1, 3, -1, -1, 9, 7, 1, -1, -1, 6, -1, -1, 8, -1, -1];

let idx = 0;

function constructTree(arr): TreeNode | null {
    if (arr[idx] == -1) {
        idx++;
        return null;
    }

    // Make node
    let me = new TreeNode(arr[idx]);
    idx++;
    // Left
    me.left = constructTree(arr);
    // Right
    me.right = constructTree(arr);
    return me;
}

let root = constructTree(arr);

function displayTree(node: TreeNode | null): void {
    if (node == null) return;

    // print node data
    let s = "" + node.val + ": ";

    if (node.left != null) s += node.left.val + ", ";
    else s += "null, ";

    if (node.right != null) s += node.right.val;
    else s += "null";

    console.log(s);

    displayTree(node.left);

    displayTree(node.right);
}

displayTree(root);
