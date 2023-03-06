n=input().split(" ")
num1=int(n[0])
num2=int(n[1])
sum=num1+num2
if(sum%12==0):
    print(12)
else:
    print(sum%12)