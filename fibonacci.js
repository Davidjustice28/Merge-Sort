// function that returns an array with a requested about of numbers in the sequence

function fib(n) {
    let arr = []
    for(let i = 0; i <= n; i++) {
        if(i <= 1) {
            arr.push(i)
        }else {
            arr.push(arr[i-1] + arr[i -2])
        }
    }
    return arr
}

//console.log(fib(9))

// Part 2 - solve same problem recursively - returns the last value in the sequence not the array

function fibRec(n) {
    if(n < 2 ) {
        return n
    }else {
        return fibRec(n-1) + fibRec(n -2)
    }
}

//console.log(fibRec(9))
// 0,1,1,2,3,5,8,13,21
