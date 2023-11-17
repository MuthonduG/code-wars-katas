def odd_not_prime(n):
    
    num_list = []
    result = []

    for i in range(1, n+1):
        if(i%2 != 0):
            num_list.append(i)

    for i in range(len(num_list)):
        for j in range(len(num_list)):
            if(j != i and j > 0):
                if(num_list[i] % num_list[j] == 0):
                    result.append(num_list[i])
    
    print(num_list)
    print(result)

odd_not_prime(15)
