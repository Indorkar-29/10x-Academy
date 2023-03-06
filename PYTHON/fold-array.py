# n=int(input())
# arr=[]
# for i in range(n):
#     arr.append(int(input()))
# fold=int(input())
# if(fold<=0):
#     print(fold)
#     for i in range(n):
#         print(arr[i])
# else:
#     orgArr=[]
#     for k in range(fold):
#         arr1=[]
#         for i,j in range(0,len(arr)-1,j+1):
#             if(len(arr)==1):
#                 arr1.append(arr[i])
#             elif(i<j):
#                 arr1.append(arr[i]+arr[j])
#             elif(i==j):
#                 arr1.append(arr[i])
#         arr=arr1
#         n=len(arr1)
# print(len(arr))
# for i in range(len(arr)):
#     print(arr[i])

n =int(input())
arr=[]
for i in range(n):
    arr.append(int(input()))
fold =int(input())
for i in range(fold):
    arr2=[]
    i=0
    j=len(arr)-1
    while(i<j):
        arr[i] +=arr[j]
        arr.pop()
        j =j-1
        i =i+1
print(len(arr))
for i in arr:
    print(i)

