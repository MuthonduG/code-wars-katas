function oddNotPrime(n) {
    let numArr = [];
    let result = [];
    let notPrimeOdd = [];
    let count = 1;

    for (let i = 0; i < n; i++) {
        let nums = count++;
        numArr.push(nums);
        if (numArr[i] % 2 !== 0) {
            result.push(numArr[i]);
        }
    }

    for (let i = 0; i < result.length; i++) {
        let primeCheck = true;
        for (let j = 2; j < result[i]; j++) {
            if (result[i] % j === 0) {
                primeCheck = false;
                break;
            }
        }
        if (!primeCheck && result[i] > 1) {
            notPrimeOdd.push(result[i]);
        }
    }

    console.log(notPrimeOdd);
}

oddNotPrime(15);
