function toggleCase(s : string) : string{
    let ans = "";
    for(let i = 0;i<s.length;i++){
        let ascii = s.charCodeAt(i);    // converting char to ascii

        if(ascii < 97){
            // This is a capital alphabet
            ascii += 32;
        }else{
            // This is a small alphabet
            ascii -= 32;
        }

        ans += String.fromCharCode(ascii)   // convert ascii to string
    }
    return ans;
}

console.log(toggleCase("aBcDeF"));
