# name your function as change_diagonal and it should take list as input
def change_diagonal(lst):
    for i in range(val):
        for j in range(val):
            if(i==j):
                if(lst[i][j]<0):
                    lst[i][j]=0
                else:
                    lst[i][j]=1
    return lst

# Do not change anything below this line.
if __name__ == "__main__":
    val = int(input())
    lst = []
    for index in range(0, val):
        lst.append([int(i) for i in input().split(' ')])
    out = change_diagonal(lst)
    for lst1 in out:
        print(" ".join(str(i) for i in lst1))