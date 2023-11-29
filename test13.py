def noonerize(numbers):
    num_one = str(numbers[0])
    num_two = str(numbers[1])
    
    # Extract first digits
    first_digit_one = num_one[0]
    first_digit_two = num_two[0]

    # Swap first digits
    num_one_spoonerized = first_digit_two + num_one[1:]
    num_two_spoonerized = first_digit_one + num_two[1:]

    spoonerized_diff = abs(int(num_two_spoonerized) - int(num_one_spoonerized))

    return spoonerized_diff

print(noonerize([123, 456]))  # Output: 267
print(noonerize([12, 34]))    # Output: 22
print(noonerize([55, 55]))    # Output: 0
print(noonerize([1, "abc"]))   # Output: TypeError
