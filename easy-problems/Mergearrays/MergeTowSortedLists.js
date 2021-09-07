var mergeTwoLists = function(l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;
    // console.log('l1.val : ', l1.val);
    // console.log('l2.val',l2.val);
    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    }
    l2.next = mergeTwoLists(l2.next, l1);
    return l2;
};

console.log(mergeTwoLists([1,2,4], [1,3,4]));
// console.log(mergeTwoLists([], [0]));

