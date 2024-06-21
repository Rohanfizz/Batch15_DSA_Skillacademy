function constructBst(l,r,nums) : TreeNode | null{
    if(l > r) return null;
    let mid = Math.floor((l+r)/2);
    let me = new TreeNode(nums[mid]);
    me.left = constructBst(l,mid-1,nums);
    me.right = constructBst(mid+1,r,nums);
    return me;
}

function sortedArrayToBST(nums: number[]): TreeNode | null {
    let root = constructBst(0,nums.length-1,nums);
    return root;
};