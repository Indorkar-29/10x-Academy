n=int(input())
num=1
for i in range(1,n+1):
    s=""
    for j in range(1,i+1):
        s+=str(num)
    num+=1
    print(s)