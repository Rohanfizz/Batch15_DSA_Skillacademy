function mazePaths(i, j, psf, n, m): void {
    if(i == n && j == m){
        console.log(psf);
        return;
    }
    if(i > n || j > m){
        return;
    }

    //Horizontal
    mazePaths(i,j+1,psf+"H",n,m);
    //Vertical
    mazePaths(i+1,j,psf+"V",n,m);
}
mazePaths(1,1,"",3,4)