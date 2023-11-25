def is_digit(s):
    result = True
    try:
        num = float(s)
    except ValueError:
        result = False

    return result

# Test cases
print(is_digit("3"))
print(is_digit("  3  "))
print(is_digit("-3.23"))
print(is_digit("3-4"))
print(is_digit("  3   5"))
print(is_digit("3 5"))
print(is_digit("zero"))
