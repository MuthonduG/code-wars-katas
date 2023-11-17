def fizzbuzz(n):
    lst = []
    count = 0

    for i in range(n):
        count += 1
        lst.append(count)
        
        if lst[i] % 3 == 0 and lst[i] % 5 == 0:
            lst[i] = 'FizzBuzz'
        elif lst[i] % 3 == 0:
            lst[i] = 'Fizz'
        elif lst[i] % 5 == 0:
            lst[i] = 'Buzz'

    return(lst)

fizzbuzz(15)
