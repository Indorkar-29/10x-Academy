cost1=int(input())
num1=int(input())
cost2=int(input())
num2=int(input())
sum=0
for i in range(num1):
    sum+=cost1
for j in range(num2):
    sum+=cost2
print(sum)