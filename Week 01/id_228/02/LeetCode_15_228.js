// 暴力解法
var threeSum = function(nums) {
  let result = [];
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          result.push([nums[i], nums[j], nums[k]]);
        }
      }
    }
  }
  return result;
};

// 多指针
var threeSum = function(nums) {
  let result = [];
  let i = 0;
  nums = nums.sort()
  while (i < Math.round(nums.length / 2)) {
    let first = i + 1;
    let last = nums.length - 1;
    while (first < last) {
      let sum = nums[i] + nums[first] + nums[last];
      if (sum === 0) {
        result.push([nums[i], nums[first], nums[last]]);
        break
      } else if (sum < 0) {
        first++;
      } else {
        last--;
      }
    }
    i++;
  }
  return result;
};

// threeSum([-1, 0, 1, 2, -1, -4]);
