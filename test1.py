def re_ordering(text):
    split_txt = text.split(' ')
    for i in range(len(split_txt)):
        if i == 0 or i == split_txt[0].capitalize():
            continue
        else:
            tmp = split_txt[0]
            split_txt[0] = split_txt[i]
            split_txt[i] = tmp
            print(' '.join(split_txt))

# Test cases
re_ordering('ming Yao')
re_ordering('Mano donowana')
re_ordering('wario LoBan hello')
re_ordering('bull color pig Patrick')
