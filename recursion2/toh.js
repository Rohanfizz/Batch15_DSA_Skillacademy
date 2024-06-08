function toh(n, s, d, h) {
    if (n == 0)
        return;
    toh(n - 1, s, h, d);
    console.log("Move disc", n, "from", s, d);
    toh(n - 1, h, d, s);
}
toh(4, "A", "B", "C");
