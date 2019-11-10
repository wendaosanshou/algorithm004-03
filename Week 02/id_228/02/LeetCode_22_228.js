/**
 * @param {number} n
 * @return {string[]}
 */
// left < n, right < left & right < n
var generateParenthesis = function(n) {
    let res = []
    let helper = function(left, right, n, result) {
        if (left === n && right === n) {
            res.push(result)
            return result
        }
        if (left < n) {
            helper(left + 1, right, n, result + "(")
        }
        if (left > right && right < n) {
            helper(left, right + 1, n, result + ")")
        }
    }
    helper(0, 0, n, "")
    return res
};
