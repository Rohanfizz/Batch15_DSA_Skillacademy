// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
function findFirstOccurance(arr:number[],target:number) : number{
    let l = 0;
    let r = arr.length-1;
    let ans = -1;

    while(l<=r){
        let mid = Math.floor((l+r)/2);
        if(arr[mid] == target){
            ans = mid;
            r = mid-1;
        }else if(arr[mid] < target){
            l = mid+1;
        }else if(arr[mid] > target){
            r = mid-1;
        }
    }
    return ans;
}

function findLastOccurance(arr:number[],target:number) : number{
    let l = 0;
    let r = arr.length-1;
    let ans = -1;

    while(l<=r){
        let mid = Math.floor((l+r)/2);
        if(arr[mid] == target){
            ans = mid;
            l = mid+1
        }else if(arr[mid] < target){
            l = mid+1;
        }else if(arr[mid] > target){
            r = mid-1;
        }
    }
    return ans;
}

function searchRange(arr: number[], target: number): number[] {
    let first = findFirstOccurance(arr,target);
    let last = findLastOccurance(arr,target);
    let ans = []
    ans.push(first)
    ans.push(last)
    return ans
};