arr = input().split(" ")
n = int(input()) % len(arr)
for j in range(0, n):
    num = arr[len(arr) - 1]
    for i in range(0, len(arr)) :
        temp = arr[i] 
        arr[i] = num 
        num = temp 
for i in arr:
    print(i)