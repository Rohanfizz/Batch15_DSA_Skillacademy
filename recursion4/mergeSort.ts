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

function mergeSort(arr: number[], l: number, r: number): number[] {
    if (l == r) {
        return [arr[l]];
    }
    let mid = Math.floor((l + r) / 2);
    let left = mergeSort(arr, l, mid);
    let right = mergeSort(arr, mid + 1, r);
    return merge2SortedArrays(left, right);
}

let arr = [10, 50, 20, 40, 70, 30, 10, 30, 40, 50, 80, 80, 90];
let sorted = mergeSort(arr, 0, arr.length - 1);
console.log(sorted);
