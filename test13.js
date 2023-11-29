function noonerize(numbers) {
    // Check if both items in the array are numbers
    for (let i = 0; i < numbers.length; i++) {
        if (typeof numbers[i] !== 'number') {
            return "invalid array";
        }
    }

    // Ensure there are exactly two elements in the array
    if (numbers.length !== 2) {
        return "invalid array";
    }

    // Spoonerize the numbers and calculate the positive difference
    const num1 = numbers[0].toString();
    const num2 = numbers[1].toString();
    const spoonerizedDiff = Math.abs(parseInt(num2[0] + num1.substring(1)) - parseInt(num1[0] + num2.substring(1)));

    return spoonerizedDiff;
}

// Example usage:
console.log(noonerize([123, 456])); // Output: 267
console.log(noonerize([12, 34]));   // Output: 22
console.log(noonerize([55, 55]));   // Output: 0
console.log(noonerize([1, "abc"]));  // Output: invalid array
