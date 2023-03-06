from math import floor
n=int(input())
x=input().split(" ")
sum=0
for i in x:
    sum+= int(i)
mean=floor(sum/n)
print(mean)