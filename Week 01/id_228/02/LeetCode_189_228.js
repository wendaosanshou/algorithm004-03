/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let temp
    let previous
    // 数组全体元素向后走一步
    let rotateStep = function(previous) {
        for (let i = 0; i < nums.length; i++) {
            temp = nums[i]
            nums[i] = previous
            previous = temp
        }
    }
    // 旋转k次
    for (let step = 0; step < k; step++) {
        previous = nums[nums.length - 1]
        rotateStep(previous)
    }
};