function sort01(arr:number[]):void{
    let i = 0;
    let j = 0;
    while(i<arr.length){
        if(arr[i] == 0){
            //swap arr[i] arr[j]
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j++;
        }else if(arr[i] == 1){
            i++;
        }
    }
}
let arr = [0,1,0,0,1,1,1,0,1,0,1]
sort01(arr)
console.log(arr);

