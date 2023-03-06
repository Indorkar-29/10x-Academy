# You can start from here
def sum_of_multiples(arr,multiple):
    temp=0
    for i in range(len(arr)):
        if(arr[i]%multiple==0):
            temp+=arr[i]
    return temp

	
	
	
# Do not change anything below this line
if __name__ == "__main__":
    numbers = [int(i) for i in input().split(' ')]
    mult = int(input())
    print(sum_of_multiples(numbers, mult))