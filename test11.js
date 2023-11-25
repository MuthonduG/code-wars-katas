function compareTriplets(a, b) {
    let countOne = 0;
    let countTwo = 0;

    for (let i = 0; i < 3; i++) {
        if (a[i] < b[i]) {
            countTwo += 1;
        } else if (a[i] > b[i]) {
            countOne += 1;
        }
    }

    console.log([countOne, countTwo]);
}

let a = [5, 6, 7];
let b = [3, 7, 10];
console.log(compareTriplets(a, b)); // Output: [1, 1]
