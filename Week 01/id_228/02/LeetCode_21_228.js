// 合并两个有序链表
// https://leetcode-cn.com/problems/merge-two-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

 // 暴力破解法
//  如果l1为null，返回l2
//  如果l2为null，返回l1
//  如果l1小于l2，返回l1,l1的next指向链表中最小节点
//  如果l2小于l1，返回l2,l2的next指向链表中最小节点
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (l1 === null) {
        return l2
    } else if (l2 === null) {
        return l1
    } else if (l1.val < l2.val) {
        l1.val = mergeTwoLists(l1.next, l2)
        return l1
    } else {
        l2.val = mergeTwoLists(l2.next, l1)
        return l2
    }
};