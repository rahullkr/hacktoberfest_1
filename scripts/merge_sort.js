function mergeSort(arr) {
    // Base case: if the array has 0 or 1 elements, it's already sorted
    if (arr.length <= 1) {
        return arr;
    }
    
    // Calculate the middle index
    const mid = Math.floor(arr.length / 2);
    
    // Split the array into left and right halves
    const leftArray = arr.slice(0, mid);
    const rightArray = arr.slice(mid);
    
    // Recursively sort both halves and merge them
    return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(leftArray, rightArray) {
    const sortedArr = [];
    
    while (leftArray.length && rightArray.length) {
        if (leftArray[0] <= rightArray[0]) {
            sortedArr.push(leftArray.shift());
        } else {
            sortedArr.push(rightArray.shift());
        }
    }
    
    // Concatenate any remaining elements (if any)
    return [...sortedArr, ...leftArray, ...rightArray];
}

const arr = [8, 20, -1, 4, 6];
const sortedArr = mergeSort(arr);
console.log(sortedArr); // [-1, 4, 6, 8, 20];
