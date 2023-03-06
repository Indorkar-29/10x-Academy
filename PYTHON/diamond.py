n = int(input())
for i in range(0,n):
    for j in range(i,n):
        print(" ",end="")
    for k in range(0,i+1):
        print('*',end="")
    for l in range(0,i):
        print("*",end="")
    print("")
for i in range(1,n):
    for j in range(0,i+1):
        print(" ",end="")
    for k in range(n,i,-1):
        print("*",end="")
    for l in range(n-1,i,-1):
        print("*",end="")
    print("")