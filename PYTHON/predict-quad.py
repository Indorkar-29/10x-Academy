n=int(input())
for i in range(n):
    a=input().split(" ")
    x=int(a[0])
    y=int(a[1])
    if(x>0 and y>0):
        print("Q1")
    elif(x<0 and y>0):
        print("Q2")
    elif(x<0 and y<0):
        print("Q3")
    else:
        print("Q4")

# arr=[4,5,9,10,34,10,10,9,34]
# arr[i]<100
# 4,1
# 5,1
# 9,2
# 10,3
# 34,2