// 暴力法
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  // 存储最大高度
  let maxArea = 0;
  // 双指针暴力遍历height数组，获取每种可能出现的面积
  for (let i = 0; i < height.length - 1; i++) {
    for (let j = i + 1; j < height.length; j++) {
      // 取最小高度，高度乘长度就是盛水容器的面积
      let area = Math.min(height[i], height[j]) * (j - i);
      // 和最大高度比较，取两者最大值
      maxArea = Math.max(area, maxArea);
    }
  }
  return maxArea;
};

// 双指针逼夹法-递归
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  // 存储最大高度，左指针，右指针
  let maxArea = 0;
  let helper = function(height, left, right) {
    // 递归截止条件
    if (left >= right) {
      return;
    }
    // 记录最大高度
    area = Math.min(height[left], height[right]) * (right - left)
    maxArea = Math.max(maxArea, area)
    // 指针左右夹逼
    height[left] > height[right] ? right-- : left++
    helper(height, left, right);
  }
  // 开始递归
  helper(height, 0, height.length - 1);
  return maxArea
};

// 双指针逼夹法-非递归
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // 存储最大高度，左指针，右指针
    let [maxArea, left, right] = [0, 0, height.length - 1]
    // 循环截止条件
    while(left < right) {
      // 记录最大高度
      area = Math.min(height[left], height[right]) * (right - left)
      maxArea = Math.max(maxArea, area)
      // 变化条件
      height[left] > height[right] ? right-- : left++
    }
    return maxArea
};
  
