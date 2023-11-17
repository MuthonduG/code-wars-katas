def seqlist(first, c, l):
    lst = []
    for i in range(first, l, c):
        lst.append(i)
    
    print(lst)

seqlist(0,1,20)