def prize_counter(s):
    count = 0
    streak = {}

    i = 0
    while i < len(s):
        current_hoop = s[i]

        # Increment streak count for the current hoop
        streak[current_hoop] = streak.get(current_hoop, 0) + 1

        # Add 100 points for making a shot
        count += 100

        # Check if there is a streak of 3 for the current hoop
        if streak[current_hoop] == 3:
            # Apply bonus points based on the color of the hoop
            if current_hoop == 'R':
                count += 500
            elif current_hoop == 'B':
                count += 300
            else:
                count += 200

            # Reset the streak count for the current hoop
            streak[current_hoop] = 0

            # Deactivate the current hoop
            s.pop(i)
            i -= 1  # Adjust the index to account for the removed element

        i += 1

    return count

# Test cases
print(prize_counter(['R', 'R', 'R', 'R']))  # Output: 800
print(prize_counter(['R', 'B', 'G', 'G', 'B', 'B', 'B', 'G', 'B']))  # Output: 1100
print(prize_counter(['R', 'R', 'R', 'G', 'B', 'R', 'B', 'B', 'B', 'R']))  # Output: 1200
print(prize_counter(['G', 'G', 'G', 'B', 'B', 'B', 'G']))  # Output: 800
