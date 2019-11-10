// 方法一：暴力法，双层迭代
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length - 1; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
    return []
};

// 方法二：使用hash表存结构，hash{value: index}, value = target - item
// 如果hash.includes(value)，则返回：[hashMap[value], index]
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hashMap = {}
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i]
        if (hashMap.hasOwnProperty(`${complement}`)) {
            return [hashMap[complement], i]
        }
        hashMap[`${nums[i]}`] = i
    }
    return []
};

twoSum([2,7,11,15], 9)
