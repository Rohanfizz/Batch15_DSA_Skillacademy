function toh(n,s,d,h) : void{
    if(n == 0) return;
    toh(n-1,s,h,d); // Send all the people above me to my helper so that i can move
    console.log("Move disc",n,"from",s,d);  // I move to my destination
    toh(n-1,h,d,s) // Call back all the people above me who were sent to helper to my destination since i am now standing on my destination
}
toh(4,"A","B","C")