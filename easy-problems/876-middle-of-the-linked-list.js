var middleNode = function (head) {
  var count = 0;
  const dummyHead = new ListNode(null);
  dummyHead.next = head;
  var head1 = dummyHead;
  var head2 = dummyHead;

  while (head1.next != null) {
    count++;
    head1 = head1.next;
  }
  console.log(count);
  while (count % 2 == 0) {
    count++;
  }
  i = 0;
  while (i < count / 2) {
    head2 = head2.next;
    i++;
  }
  return head2;
};
