
function searchBST(node: TreeNode | null, target: number): TreeNode | null {
    if(node == null) return null;
    if(node.val == target) return node;
    if(target < node.val){
        return searchBST(node.left, target);
    }
    if(target > node.val){
        return searchBST(node.right,target);
    }
};