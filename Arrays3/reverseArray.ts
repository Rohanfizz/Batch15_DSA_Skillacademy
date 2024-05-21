function reverseArray(arr:number[]) : void{
    let l = 0;
    let r = arr.length-1;
    while(l<r){
        // swap arr[l] arr[r]
        let temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
        l++;
        r--;
    }
}

function reverseArrayInRange(arr:number[],l:number,r:number) : void{
    while(l<r){
        // swap arr[l] arr[r]
        let temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
        l++;
        r--;
    }
}

let arr = [10,20,30,40,50,60,70]
console.log(arr)
reverseArrayInRange(arr,1,4)
console.log(arr)
