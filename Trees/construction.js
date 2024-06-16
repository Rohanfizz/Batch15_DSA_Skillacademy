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
var preOrder = [];
var inOrder = [];
var postOrder = [];
function dfs(node) {
    if (node == null)
        return;
    // 1st time
    preOrder.push(node.val);
    dfs(node.left);
    // 2nd time
    inOrder.push(node.val);
    dfs(node.right);
    // 3rd time
    postOrder.push(node.val);
}
dfs(root);
console.log(preOrder);
console.log(inOrder);
console.log(postOrder);
