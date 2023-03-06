def findLuckyNumber(nums):
    dict={}
    for i in nums:
        if (dict.get(i)==None):
            dict[i]=1
        else:
            dict[i]=dict[i]+1
    for key in dict:
        if key==dict.get(key):
            return key
    return -1
# DO NOT change anything below this line
if __name__ == "__main__":
    num_elems = int(input())
    input_arr = []
    for index in range(num_elems):
        input_arr.append(int(input()))
    print(findLuckyNumber(input_arr))