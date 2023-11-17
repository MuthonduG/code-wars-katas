def decimal_to_binary(lst):
    results = 0

    for i in range(len(lst)):
        if type(lst[i]) == int:
            results += lst[i]

    binary_representation = bin(results)[2:]  # [2:] to remove the '0b' prefix
    return binary_representation

decimal_to_binary([1, 2, 'a'])
