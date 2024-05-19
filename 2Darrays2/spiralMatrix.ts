function spiralOrder(arr: number[][]): number[] {
    let ans : number[] = [];

    let total = arr.length * arr[0].length;

    let tw = 0;
    let bw = arr.length-1;
    let lw = 0;
    let rw = arr[0].length - 1;

    while(total > 0){
        //top wall
        for(let j = lw; j<=rw && total>0 ;j++){
            ans.push(arr[tw][j])
            total--;
        }
        tw++;

        //right wall
        for(let i = tw; i<=bw && total>0 ; i++){
            ans.push(arr[i][rw])
            total--;
        }
        rw--;

        //bottom wall
        for(let j = rw ; j>=lw && total>0 ; j--){
            ans.push(arr[bw][j])
            total--;
        }
        bw--;

        //left wall
        for(let i = bw ; i>=tw && total>0 ; i--){
            ans.push(arr[i][lw])
            total--;
        }
        lw++;
    }
    return ans;
};