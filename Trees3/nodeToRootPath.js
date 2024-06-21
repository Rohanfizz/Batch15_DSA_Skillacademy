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
function ntrp(node, target) {
    if (node == null)
        return [];
    if (node.val == target)
        return [node.val];
    var leftArr = ntrp(node.left, target);
    var rightArr = ntrp(node.right, target);
    if (leftArr.length == 0 && rightArr.length == 0) {
        return [];
    }
    if (leftArr.length > 0) {
        leftArr.push(node.val);
        return leftArr;
    }
    if (rightArr.length > 0) {
        rightArr.push(node.val);
        return rightArr;
    }
}
console.log(ntrp(root, 4));
