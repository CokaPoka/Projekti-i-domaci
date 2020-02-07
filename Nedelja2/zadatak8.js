let n = 5;
let x = 0;
for (i = n; i >= 0; i--) {
    x = ' '.repeat(i) + '#'.repeat(n - i);
    console.log(x);
}
let y = '`'.repeat(3);
console.log(y);