function isPalindrome(s : string) : boolean {
    let l = 0;
    let r = s.length-1;

    while(l<r){
        if(s[l] == s[r]){
            l++;
            r--;
        }else return false;
    }
    
    return true;
}