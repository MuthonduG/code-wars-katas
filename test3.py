def is_leap_year(year):
    num = int(year)

    if((num % 4 == 0 and num % 100 != 0) or num % 400 == 0):
        print('Year {} is a leap year'.format(year))
    else:
        print('Year {} is not a leap year'.format(year))


is_leap_year(2020)
is_leap_year(2022)
