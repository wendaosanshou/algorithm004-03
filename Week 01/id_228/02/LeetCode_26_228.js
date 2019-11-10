/**
 * @param {number[]} nums
 * @return {number}
 */
// 双指针法-for循环
var removeDuplicates = function(nums) {
    if (nums.length === 0) {
        return 0
    }
    let i = 0
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++
            nums[i] = nums[j]
        }
    }
    return i + 1
};

// 双指针法-while循环
var removeDuplicates = function(nums) {
    if (nums.length === 0) {
        return 0
    }
    let i = 0
    let j = 1
    while(j < nums.length) {
        if (nums[i] === nums[j]) {
            j++
        } else {
            i++
            nums[i] = nums[j]
            j++
        }
    }
    return i + 1
};

// 双指针法模板
// function removeDuplicates(nums) {
//     if (nums.length === 0) {
//         return 0
//     }
//     let i = 0
//     for (let j = 1; j < nums.length; j++) {
//         if (nums[i] !== nums[j]) {
//             i++
//             nums[i] = nums[j]
//             j++
//         }
//     }
//     return i + 1
// }
