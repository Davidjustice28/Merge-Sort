//merge sort algorithm - sort the included array

let c = [34,5,1,12,7]


const merge = (arrA,arrB) => {
    let newArray = []
    while(arrA.length && arrB.length) {
        if(arrA[0] <= arrB[0]) {
            newArray.push(arrA[0])
            arrA.shift()
        }
        else {
            newArray.push(arrB[0])
            arrB.shift()
        }
    }
    return newArray.concat(arrA,arrB)
    
}


const mergeSort = (arr) => {
    if(arr.length <= 1) {
        return arr
    }
    else {
        let middle = Math.ceil(arr.length /2)
        let leftArr = mergeSort(arr.slice(0,middle))
        let rightArr = mergeSort(arr.slice(middle))
        return merge(leftArr,rightArr)
    }
}
  
 console.log(mergeSort(c))
 
// 1 - divide the array into mulplite 1 element arrays
// 2 - create a new array
// 3 - merge arrays  comparing left to right, which one is smaller get appended to new array
// 4 - add remainders from left first than right
// 5 - return new array