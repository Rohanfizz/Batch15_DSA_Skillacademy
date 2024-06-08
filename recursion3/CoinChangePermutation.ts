function coinChangePermutation(curr: number,psf: string,coins: number[],target: number) {
    if (curr == target) {
        console.log(psf);
        return;
    }
    if (curr > target) {
        return;
    }
    for (let i = 0; i < coins.length; i++) {
        let coin = coins[i];
        coinChangePermutation(curr + coin, psf + coin + " , ", coins, target);
    }
}
coinChangePermutation(0,"",[10,20,30],40)