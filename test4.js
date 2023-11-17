function arr2bin(arr) {
    let results = 0;

    for (let i = 0; i < arr.length; i++) {
        // Check if the element is a number
        if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
            results += arr[i];
        } else {
            return results
        }
    }

    // Convert the sum to binary
    return results.toString(2);
}

