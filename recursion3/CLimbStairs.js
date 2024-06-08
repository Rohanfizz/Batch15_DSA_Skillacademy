function func(curr, psf, n) {
    if (curr == n) {
        console.log(psf);
        return;
    }
    if (curr > n)
        return;
    // 1jump
    func(curr + 1, psf + 1, n);
    //2Jump
    func(curr + 2, psf + 2, n);
    //3Jump
    func(curr + 3, psf + 3, n);
}
func(0, "", 4);
