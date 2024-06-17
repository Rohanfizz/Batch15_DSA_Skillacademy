var TreeNode = /** @class */ (function () {
    function TreeNode(v) {
        this.val = v;
        this.left = null;
        this.right = null;
    }
    return TreeNode;
}());
var arr = [5, 2, 4, -1, -1, 3, -1, -1, 9, 7, 1, -1, -1, 6, -1, -1, 8, -1, -1];
var idx = 0;
function constructTree(arr) {
    if (arr[idx] == -1) {
        idx++;
        return null;
    }
    // Make node
    var me = new TreeNode(arr[idx]);
    idx++;
    // Left
    me.left = constructTree(arr);
    // Right
    me.right = constructTree(arr);
    return me;
}
var root = constructTree(arr);
function displayTree(node) {
    if (node == null)
        return;
    displayTree(node.left);
    // print node data
    var s = "" + node.val + ": ";
    if (node.left != null)
        s += node.left.val + ", ";
    else
        s += "null, ";
    if (node.right != null)
        s += node.right.val;
    else
        s += "null";
    console.log(s);
    displayTree(node.right);
}
displayTree(root);
