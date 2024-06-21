
function ntrp(node : TreeNode | null, target : number) : TreeNode[] {
    if(node == null) return [];
    if(node.val == target) return [node];

    let leftArr = ntrp(node.left,target);
    let rightArr = ntrp(node.right,target);

    if(leftArr.length == 0 && rightArr.length == 0){
        return [];
    }

    if(leftArr.length > 0){
        leftArr.push(node);
        return leftArr;
    }

    if(rightArr.length>0){
        rightArr.push(node);
        return rightArr;
    }
}

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
	let ntrpOfP : TreeNode[] = ntrp(root,p.val);
    let ntrpOfQ : TreeNode[] = ntrp(root,q.val);
    let i = ntrpOfP.length-1;
    let j = ntrpOfQ.length-1; 

    while(i >=0 && j>=0){
        if(ntrpOfP[i].val != ntrpOfQ[j].val) break;
        i--;
        j--;
    }
    return ntrpOfP[i+1];
};

