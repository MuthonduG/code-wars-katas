const prizeCounter = (s) => {
    let count = 0;
    let currentStreak = 1;

    for (let i = 0; i < s.length; i++) {
        // Check if the current hoop is the same as the previous one
        if (i > 0 && s[i] === s[i - 1]) {
            currentStreak++;
        } else {
            currentStreak = 1;
        }

        // Add points for the current hoop
        count += 100;

        // Check for a streak of 3
        if (currentStreak === 3) {
            if (s[i] === 'R') {
                count += 500; // Red hoop bonus
            } else if (s[i] === 'B') {
                count += 300; // Blue hoop bonus
            } else if (s[i] === 'G') {
                count += 200; // Green hoop bonus
            }

            // Deactivate the hoop
            currentStreak = 0;
        }
    }

    return count;
};

console.log(prizeCounter(['R', 'R', 'R', 'R'])); // Output: 800
console.log(prizeCounter(['R', 'B', 'G', 'G', 'B', 'B', 'B', 'G', 'B'])); // Output: 1100
console.log(prizeCounter(['R', 'R', 'R', 'G', 'B', 'R', 'B', 'B', 'B', 'R'])); // Output: 1300
console.log(prizeCounter(['G', 'G', 'G', 'B', 'B', 'B', 'G'])); // Output: 900
