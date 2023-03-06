# arrSize=int(input())
# A=[]
# for i in range(arrSize):
#     A.append(int(input()))
# print(A[len(A)-1])
# leader=A[len(A)-1]
# i=A[len(A)-2]
# while(i>=0):
#     if(A[i]>leader):
#         print(A[i])
#         leader=A[i]
#         i-=1

arrSize=int(input())
arr=[]
for i in range(arrSize):
    arr.append(int(input()))
print(arr[len(arr)-1])
leader=arr[len(arr)-1]
for i in range(len(arr)-2,-1,-1):
    if(arr[i]>leader):
        print(arr[i])
        leader=arr[i]