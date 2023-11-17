def flick_switch(lst):
    result, bul = [], True
    for i in lst:
        if i == 'flick':
            bul = not bul
        result.append(bul)

    return(result)


flick_switch(['bicycle', 'jarmony', 'flick', 'sheep', 'flick']);
flick_switch(['flick', 'chocolate', 'adventure', 'sunshine']);
flick_switch(['codewars', 'flick', 'code', 'wars']);