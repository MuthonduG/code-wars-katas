function reOrdering(text) {
    let splitted = text.split(' ');

    for (let i = 0; i < splitted.length; i++) {
        if (splitted[i][0] === splitted[i][0].toUpperCase()) {
            // Swap the current word with the first capitalized word (if not already at the first position)
            if (i > 0) {
                let temp = splitted[0];
                splitted[0] = splitted[i];
                splitted[i] = temp;
            }
        }
    }

    // Join the modified words back into a string using space as a separator
    let result = splitted.join(' ');
    console.log(result);
}

// Test cases
reOrdering('ming Yao');
reOrdering('Mano donowana');
reOrdering('wario LoBan hello');
reOrdering('bull color pig Patrick');
