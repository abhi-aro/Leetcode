/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let result = l1;
  let carry = 0
  do{
      let sum = (l1?.val || 0) + (l2?.val || 0) + carry
      
      l1.val = sum%10

      carry = Math.floor(sum/10)

      if(l1.next === null && (l2?.next || carry)){
          l1.next = new ListNode(0, undefined)
      }

      l1 = l1?.next
      l2 = l2?.next
  }while(l1 || l2 || carry)

  return result
};