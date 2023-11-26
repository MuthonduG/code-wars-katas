def plusMinus(arr):
    n = len(arr)
    positive_count = 0
    negative_count = 0
    zero_count = 0

    for i in range(len(arr)):
        if arr[i] < 0:
            negative_count += 1
        elif arr[i] > 0:
            positive_count += 1
        elif arr[i] == 0:
            zero_count += 1

    # Calculate the ratios
    positive_ratio = positive_count / n
    negative_ratio = negative_count / n
    zero_ratio = zero_count / n

    # Print the ratios with 6 decimal places
    print("{:.6f}".format(positive_ratio))
    print("{:.6f}".format(negative_ratio))
    print("{:.6f}".format(zero_ratio))

arr = [-4, 3, -9, 0, 4, 1]
plusMinus(arr)
