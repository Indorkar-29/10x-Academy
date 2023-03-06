num=input().split(" ")
n=int(num[0])
m=int(num[1])
arr=[]
temp=input().split(" ")
for i in range(n):
    arr.append(int(temp[i]))
count=0
for j in range(n):
    if(arr[j]==m):
        count+=1
print(count)