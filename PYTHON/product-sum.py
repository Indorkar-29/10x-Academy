n=input()
# arr=[]
# for i in range(0,len(n)):
#     arr.append(int(n[i]))
prod=1
sum=0
# for i in arr:
#     power*=i
#     sum+=i
# print(power-sum)
for i in n:
    num=int(i)
    sum+=num
    prod+=num
print(prod-sum)