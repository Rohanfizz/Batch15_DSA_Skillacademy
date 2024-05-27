function isAnagram(s: string, t: string): boolean {
    if(s.length != t.length) return false;

    let freqS = new Array(26).fill(0); // [0,0,0,0,0,0,0,0,0,0,0...26 times]
    let freqT = new Array(26).fill(0);

    for(let i = 0;i<s.length;i++){
        //s[i] == "a", charCodeAt(i) => 97,
        let idx = s.charCodeAt(i) - 97;
        freqS[idx]++;
    }

    for(let i = 0;i<t.length;i++){
        let idx = t.charCodeAt(i) - 97;
        freqT[idx]++;
    }

    for(let i = 0;i<26;i++){
        if(freqS[i] != freqT[i]) return false; 
    }
    return true;
};
