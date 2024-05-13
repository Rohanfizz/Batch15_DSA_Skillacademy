function diamondPattern(n : number) : void{
    // First line
    let stars = 1;
    let spaces = Math.floor(n/2);

    for( let i = 1 ; i <= n ; i++ ){
        // in every iteration we will print a line of
        // the diamond pattern
        let s = "";
        for(let j = 1;j<=spaces;j++) s+=" ";
        for(let j = 1;j<=stars;j++) s+="*"
        console.log(s);

        if(i < n/2){
            // Increase
            stars += 2;
            spaces -=1;
        }else{
            // Decrease
            stars-=2;
            spaces +=1;
        }

    }
}

diamondPattern(21)