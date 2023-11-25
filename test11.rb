def compare_triplets(a, b)
    count = 0
    count_two = 0
    3.times do |i|
        if a[i] > b[i]
            count += 1
        elsif a[i] < b[i]
            count_two += 1
        end
    end
    p [count, count_two]
end

a = [3, 7, 10]
b = [5, 6, 7]
compare_triplets(a, b)