/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  if (nums1.length === 0) {
    return nums2.slice(0, m);
  } else if (nums2.length === 0) {
    return nums1.slice(0, n);
  }
  let tempNums1 = nums1.slice(0, m);
  let tempNums2 = nums2.slice(0, n);
  Object.assign(nums1, tempNums1.concat(tempNums2).sort((a, b) => a - b));
};

var merge = function(nums1, m, nums2, n) {
  for (let p = m + n - 1, p1 = m - 1, p2 = n - 1; p > 0; p--) {
    if (p1 < 0) {
      continue;
    } else if (p2 < 0) {
      continue;
    } else if (nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1];
      p1--;
    } else {
      nums1[p] = nums2[p2];
      p2--;
    }
  }
};
