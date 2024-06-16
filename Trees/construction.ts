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

let preOrder: number[] = [];
let inOrder: number[] = [];
let postOrder: number[] = [];

function dfs(node: TreeNode | null) {
    if (node == null) return;
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
