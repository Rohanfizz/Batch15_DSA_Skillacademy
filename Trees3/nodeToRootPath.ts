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

function ntrp(node: TreeNode | null, target: number): number[] {
    if (node == null) return [];
    if (node.val == target) return [node.val];

    let leftArr = ntrp(node.left, target);
    let rightArr = ntrp(node.right, target);

    if (leftArr.length == 0 && rightArr.length == 0) {
        return [];
    }
    if (leftArr.length > 0) {
        leftArr.push(node.val);
        return leftArr;
    }
    if(rightArr.length > 0){
        rightArr.push(node.val);
        return rightArr;
    }
}

console.log(ntrp(root,4));
