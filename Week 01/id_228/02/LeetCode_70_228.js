// 暴力法-斐波拉切队列
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let helper = function(level, n) {
    if (level > n) {
      return 0;
    }
    return helper(level + 1, n) + helper(level + 2, n);
  };
  return helper(0, n);
};

// 动态规划（非递归）
var climbStairs = function(n) {
  let result = 0;
  let s1 = 1;
  let s2 = 2;
  if (n <= 2) {
    return n;
  }
  for (let i = 3; i <= n; i++) {
    result = s1 + s2;
    s1 = s2;
    s2 = result;
  }
  return result;
};

// 动态规划（递归）
var climbStairs = function(n) {
  let result = 0;
  let [s1, s2] = [1, 2];
  let helper = function(n, level) {
    if (level > n) {
      return;
    }
    result = s1 + s2;
    s1 = s2;
    s2 = result;
    helper(n, ++level);
  };
  if (n > 2) {
    helper(n, 3);
  } else {
    return n;
  }
  return result;
};
