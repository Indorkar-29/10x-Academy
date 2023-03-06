# Pattern Problems:

# n=int(input())
# num=1
# for i in range(1,n+1):
#     s=""
#     for j in range(1,i+1):
#         s+=str(num)+" "
#         num+=1
#     print(s)

# n=int(input())
# num=1
# for i in range(1,n+1):
#     s=""
#     for j in range(1,i+1):
#         s+=str(num)
#     num+=1
#     print(s)

# ip:
# 5

# op:
# 1
# 22
# 333
# 4444
# 55555

# ip:
# 5

# op:
# 1 
# 2 3
# 4 5 6
# 7 8 9 10
# 11 12 13 14 15


# n=int(input())
# for i in range(1,n+1):
#     s=""
#     for j in range(1,i+1):
#         s+=str(j)+" "
#     print(s)

# ip:
# 5

# op:
# 1 
# 1 2
# 1 2 3
# 1 2 3 4
# 1 2 3 4 5


# n=int(input())
# for i in range(1,n+1):
#     for j in range(1,i+1):
#         print(j,end=" ")
#     if(i!=n):
#         print()

# ip:
# 4

# op:
# 1 
# 1 2
# 1 2 3
# 1 2 3 4


# n=int(input())
# num=1
# for i in range(1,n+1):
#     for j in range(1,i+1):
#         print(num,end=" ")
#         num+=1
#     if(i!=n):
#         print()

# ip:
# 4

# op:
# 1 
# 2 3
# 4 5 6
# 7 8 9 10

# n=int(input())
# for i in range(1,n+1):
#     for j in range(1,i+1):
#         print(j)
#     if(i!=n):
#         print()

# ip:
# 3

# op:
# 1

# 1
# 2

# 1
# 2
# 3

# n=int(input())
# for i in range(n,0,-1):
#     for j in range(1,i+1,):
#         print(j,end=" ")
#     if(i<=n):
#         print()

# ip:
# 5

# op:
# 1 2 3 4 5 
# 1 2 3 4
# 1 2 3
# 1 2
# 1

# n=int(input())
# for i in range(n,0,-1):
#     for j in range(i,0,-1):
#         print(j,end=" ")
#     if(i<=n):
#         print()

# ip:
# 5

# op:
# 5 4 3 2 1
# 4 3 2 1
# 3 2 1
# 2 1
# 1

# n=int(input())
# for i in range(1,n+1):
#     for j in range(n,i-1,-1):
#         print(j,end=" ")
#     if(i!=n):
#         print()

# ip:
# 5

# op:
# 5 4 3 2 1
# 5 4 3 2
# 5 4 3
# 5 4
# 5

# Array:

# arr = input().split(" ") 
# index = int(input())
# num = input()
# for i in range(index , len(arr)) :
#     temp = arr[i]
#     arr[i] = num
#     num= temp 
# arr.append(num)
# print(arr)

# ip:
# 2 5 8 9 4
# 3 
# 10

# op:
# ['2', '5', '8', '10', '9', '4']

# For One tym rotation:

# arr = input().split(" ")
# num = arr[len(arr) - 1]
# for i in range(0, len(arr)) :
#     temp = arr[i] 
#     arr[i] = num 
#     num = temp 
# print(arr)

# ip:
# 3 4 5 6 7

# op:
# ['7', '3', '4', '5', '6']

# For n tym rotation:

# arr = input().split(" ")
# n = int(input())
# for j in range(0, n):
#     num = arr[len(arr) - 1]
#     for i in range(0, len(arr)) :
#         temp = arr[i] 
#         arr[i] = num 
#         num = temp 
# print(arr)

# ip:
# 3 4 5 7 8
# 2

# op:
# ['7', '8', '3', '4', '5']

# Below one is more efficient then above one:

# arr = input().split(" ")
# n = int(input()) % len(arr)
# for j in range(0, n):
#     num = arr[len(arr) - 1]
#     for i in range(0, len(arr)) :
#         temp = arr[i] 
#         arr[i] = num 
#         num = temp 
# print(arr)

# ip:
# 34 75 85 9
# 1000000

# op:
# ['34', '75', '85', '9']

# 2D-Array:

# n=int(input())
# matrix=[]
# for i in range(0,n):
#     arr=input().split(" ")
#     for j in range(0,len(arr)):
#         arr[j]=int(arr[j])
#     matrix.append(arr)
# print(matrix)
# for arr in matrix:
#     for i in arr:
#         print(i,end=" ")
#     print("")

# ip:
# 3
# 123
# 456
# 789

# op:
# [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
# 1 2 3
# 4 5 6
# 7 8 9

# n=int(input())
# matrix=[]
# sum1=0
# sum2=0
# for i in range(0,n):
#     arr=input().split(" ")
#     for j in range(0,len(arr)):
#         arr[j]=int(arr[j])
#     matrix.append(arr)
# for i in range(0,n):
#     sum1+=matrix[i][i]
#     sum2+=matrix[i][n-i-1]
# print(sum1)
# print(sum2) 

# ip:
# 3
# 1 2 3
# 4 5 6
# 7 8 9

# op:
# 15
# 15

# n=int(input())
# matrix=[]
# transpose=[]
# for i in range(0,n):
#     arr=input().split(" ")
#     for j in range(0,len(arr)):
#         arr[j]=int(arr[j])
#     matrix.append(arr)
# for j in range(0,len(matrix[0])):
#     row=[]
#     for i in range(0,len(matrix)):
#         row.append(matrix[i][j])
#     transpose.append(row)
#     print(row)
# print(transpose)

# ip:
# 2
# 1 2 3
# 4 5 6

# op:
# [1, 4]
# [2, 5]
# [3, 6]
# [[1, 4], [2, 5], [3, 6]]

# def add(a,b):
#     return a+b
# print(add(10,20))

# op:
# 30

# Functions:

# a=[3,8,10,23]
# b=[5,7,2]
# c=[100,345,657,890]
# n=int(input())

# def search(arr,n):
#     for i in arr:
#         if n==i:
#             return True
#     return False
# if(search(a,n)):
#     print("One")
# elif(search(b,n)):
#     print("Two")
# elif(search(c,n)):
#     print("Three")
# else:
#     print("Not Found")

# ip:
# 2

# op:
# Two

# a=10
# def func():
#     print(a)
# func()

# op:
# 10

# a=10
# def fun():
#     a=90
#     print(a)
# fun()
# print(a)

# op:
# 90
# 10

# Heap Memory Location:

# a=100
# b=100
# print(id(a),id(b))
# print(id(a)==id(b))

# op:
# 2015478418768 2015478418768
# True

# a=100
# print(id(a))
# a=90
# print(id(a))
# b=100
# print(id(b))

# op:
# 2206724918608
# 2206724918288
# 2206724918608

# arr=[3,4,5]
# print(id(arr))
# arr[0]=7
# print(id(arr))

# op:
# 1987918048704
# 1987918048704



# Ternary Operator:

# status=True
# a="Tushar" if(status) else "Indorkar"
# print(a)

# op:
# Tushar

# Operators:

# print(False or "Tushar")
# print(False and "Tushar")
# print(True and ("Tushar" or "Indorkar"))
# print(False and ("Tushar" or "Indorkar"))

# op:
# Tushar
# False
# Tushar
# False

