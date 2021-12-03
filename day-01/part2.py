def sum_of_three(i, lines):
    three_sum = 0
    three_sum += int(lines[i])
    three_sum += int(lines[i + 1])
    three_sum += int(lines[i + 2])
    return three_sum

with open("input.txt", "r") as f:
    line = f.read()
    lines = line.split("\n")
    count = 0
    three_window = 3

    for i, _elem in enumerate(lines):
        if 0 < i < len(lines)-three_window:
            prev_sum = sum_of_three(i-1, lines)
            current_sum = sum_of_three(i, lines)
            #print(current_sum)
            if current_sum > prev_sum:
                count += 1

print(count)