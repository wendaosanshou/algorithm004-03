
// 解法一，抽离出0和非0的数组，然后复制给nums（此方法新创了数组，不合适解此题）
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let zeroNums = []
    let noZeroNums = []
    for (let i = 0; i < nums.length; i++) {
        let element = nums[i]
        if (element === 0) {
            zeroNums.push(0)
        } else {
            noZeroNums.push(element)
        }
    }
    let allNums = [...noZeroNums, ...zeroNums]
    for (let i = 0; i < nums.length; i++) {
        nums[i] = allNums[i]
    }
    return nums
};



// 解法二，使用快慢指针
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let slowIndex = 0
    for (let fastIndex = 0; fastIndex < nums.length; fastIndex++) {
        if (nums[fastIndex] !== 0) {
            if (fastIndex !== slowIndex) {
                nums[slowIndex] = nums[fastIndex]
                nums[fastIndex] = 0
            }
            slowIndex++
        }
    }
    return nums
};


// 双指针法
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let noZeroIndex = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[noZeroIndex] = nums[i]
            noZeroIndex++
        }
    }

    for (let j = noZeroIndex; j < nums.length; j++) {
        nums[j] = 0
    }
    return nums
};