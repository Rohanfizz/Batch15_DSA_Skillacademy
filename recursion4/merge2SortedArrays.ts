function merge2SortedArrays(nums1, nums2) {
    let ans: number[] = [];
    let i = 0;
    let j = 0;

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            ans.push(nums1[i]);
            i++;
        } else {
            ans.push(nums2[j]);
            j++;
        }
    }

    if (i == nums1.length) {
        // When nums1 gets finished
        while (j < nums2.length) {
            // remaing elements of nums2 are added
            ans.push(nums2[j]);
            j++;
        }
    } else {
        while (i < nums1.length) {
            // remaing elements of nums2 are added
            ans.push(nums1[i]);
            i++;
        }
    }

    return ans;
}
