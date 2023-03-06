n,m=list(map(int,input().split()))
matrix=[]
sum=0
for i in range(n):
    row=list(map(int,input().split()))
    matrix.append(row)
for i in range(n):
    for j in range(m):
        if(matrix[i][j]%2 !=0):
            sum+=matrix[i][j]
print(sum)