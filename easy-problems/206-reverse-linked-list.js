/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    if (head === null) return null;
    if (head.next === null) return head;
    
    var newHead = reverseList(head.next);
    var temp = newHead;
    while (temp.next !== null) {
        temp = temp.next;
    }
    
    head.next = null;
    temp.next = head;
    
    return newHead;
};

/*
var reverseList = function(head) {
    if (head === null) return null;
    if (head.next === null) return head;
    
    var newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    
    return newHead;
    
};// non-recursive
var reverseList = function(head) {
    if (head === null) return null;
    if (head.next === null) return head;
    
    
    
    var prev = head;
    var cur = head.next;
      
    prev.next = null;
    while (cur !== null) {
        var next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    
    return prev;
    
};
*/