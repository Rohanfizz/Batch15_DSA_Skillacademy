function maxDepth(root: TreeNode | null): number {
    if(root == null) return 0;
    let leftHeight = maxDepth(root.left);
    let rightHeight = maxDepth(root.right);
    return Math.max(leftHeight,rightHeight) + 1;
};