def compare_triplets(a, b):
    count, count_two = 0, 0;
    for i in range(3):
        if a[i] > b[i]:
            count += 1
        elif a[i] < b[i]:
            count_two += 1

    return [count, count_two]

a, b = [5, 6, 7], [3, 7, 10];
compare_triplets(a, b)