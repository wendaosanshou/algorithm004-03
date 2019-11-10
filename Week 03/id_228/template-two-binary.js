function binarySearch(array, target) {
    let left = 0
    let right = array.length - 1 
    while(left < right) {
        let mid = (left + right) / 2
        if (array[mid] === target) {
            return result
        } else if (array[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
}