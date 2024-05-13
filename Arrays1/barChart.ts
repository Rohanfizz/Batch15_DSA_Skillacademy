function getMaxElement(arr :number[]) : number{
    let maxiEle = - Infinity;

    for(let i = 0;i<arr.length;i++){
        if(arr[i] > maxiEle){
            maxiEle = arr[i];
        }
    }
    return maxiEle;
}

function barChart(arr: number[]){

    let height = getMaxElement(arr);
    let widgth = arr.length;

    for(let currFloor = height;currFloor >= 1;currFloor--){
        let s = "";
        for(let i = 0;i<arr.length;i++){
            if(arr[i] >= currFloor) s+="*"
            else s+=" "
        }
        console.log(s);
    }
}

barChart([7,6,5,4,3,2,1,2,3,4,5,6,7])