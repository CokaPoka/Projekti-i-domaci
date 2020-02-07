let n = 5;
let x = 0;
for (i = 1; i <= n; i++) {
    x = ' '.repeat(n - i) + '#'.repeat(i) + ' ' + '#'.repeat(i);
    console.log(x);
}
let y = '`'.repeat(3);
console.log(y);