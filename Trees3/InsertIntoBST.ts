function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
    if(root == null){   // If we are on null, we want to add the node here only
        return new TreeNode(val);
    }
    if(val < root.val){
        root.left = insertIntoBST(root.left,val);
    }else if(val > root.val){
        root.right = insertIntoBST(root.right,val);
    }
    return root;
};