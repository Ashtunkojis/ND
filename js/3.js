function check (a, x) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === x) {
            return true;
        }
    }
    return false;
}

console.log (check([66, 101], 66))
console.log (check([80, 117, 115, 104, 45, 85, 112, 115], 45));
console.log (check(['t', 'e', 's', 't'], 'e'));
console.log (check(['what', 'a', 'great', 'kata'], 'kat'));