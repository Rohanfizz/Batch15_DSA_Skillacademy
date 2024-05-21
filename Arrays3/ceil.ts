function findCeil(arr:number[],target:number) : number{
    let l = 0;
    let r = arr.length-1;
    let ans = -1;

    while(l<=r){
        let mid = Math.floor((l+r)/2);

        if(arr[mid] == target) return arr[mid];
        else if(arr[mid] < target) l = mid+1;
        else if(arr[mid] > target){
            ans = arr[mid];// if arr[mid] if bigger, it can be a potential ceil
            r = mid-1;
        }
    }
    return ans;
}

let arr = [10,20,30,40,50,60,70,80,90]
let target = 100
console.log(findCeil(arr,target))