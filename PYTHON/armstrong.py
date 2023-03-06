#1:

# n=input()
# x=int(n)
# arr=[]
# for i in range(0,len(n)):
#     arr.append(int(n[i]))
# sum=0
# for i in arr:
#     power=i**3
#     sum+=power
# if(x==sum):
#     print("YES")
# else:
#     print("NO")

# n = input()
# nums = list(map(int, n))
# result = 0
# for i in nums:
#     result += i**3
# print(result)

#2:

# n = int(input())
# sum = 0
# cube = n
# while cube> 0:
#    digit = cube % 10
#    sum += digit ** 3
#    cube //= 10
# if n == sum:
#    print("Yes")
# else:
#    print("No")

#3:

n=input()
arm=0
for x in n:
   num=int(x)
   arm+=num**3
if(int(n)==arm):
   print("Yes")
else:
   print("No")