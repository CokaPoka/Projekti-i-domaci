function divisibleByFive(arr) {
    arr2 = [];
    for (let index = 0; index < arr.length; index++) {
        let element = arr[index];
        if (element % 5 == 0) {
            arr2.push(arr[index]);
        }
    }

    return arr2;
}
let niz = [1, 4, 5, 8, 9, 10, 15, 17];
console.log(`Elementi deljivi sa 5 su: ${divisibleByFive(niz)}`);
