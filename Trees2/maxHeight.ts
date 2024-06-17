class Solution {
    /**
    * @param Node node
    
    * @returns number
    */
    getSize(node) {
        if (node == null) return 0;
        let leftSize = this.getSize(node.left);
        let rightSize = this.getSize(node.right);

        return leftSize + rightSize + 1;
    }
}
