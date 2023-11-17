def count_salutes(hallway):
    count = 0
    for i in range(len(hallway)):
        for j in range(i+1, len(hallway)):
            if hallway[i] == '>' and hallway[j] == '<':
                count += 2
    return count

# Example usage
print(count_salutes('<---<--->----<'))
print(count_salutes('>----->-----<--<'))
