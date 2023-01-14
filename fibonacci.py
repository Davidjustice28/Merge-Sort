# solve fibanacci sequence with a for loop and then with recursion

def fib(n):
    if n < 2:
        return n
    else:
        return fib(n-1) + fib(n-2)


def fibRec(n):
    nums = []
    for i in range(n+1):
        if len(nums) < 2:
             nums.append(i)
        else:
            nums.append(nums[i-1] + nums[i-2])
    print(nums)
    

fibRec(8)