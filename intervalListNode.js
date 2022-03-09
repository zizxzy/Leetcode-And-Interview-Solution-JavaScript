// 用set存储地址，相交链表的相交部分指向的是同一个node，也就是同一个地址
const getIntersectionNode = function (headA, headB) {
  let set = new Set();
  while (headA) {
    set.add(headA);
    headA = headA.next;
  }

  while (headB) {
    if (set.has(headB)) return headB;
    headB = headB.next;
  }

  return null;
}



// 消差法
const getIntersectionNode1 = function (headA, headB) {
  const aLength  = getListLength(headA);
  const bLength = getListLength(headB);
  if (aLength > bLength){
    forwardLongList(aLength,bLength,headB);
  }else {
    forwardLongList(bLength,aLength,headA);
  }
  while(headB && headA){
    if (headB === headA) return headA;
    headA = headA.next;
    headB = headB.next;
  }
  return null;
}

const getListLength = function (head) {
  let length = 0;
  while(head){
    length ++;
    head = head.next;
  }
  return length;
}


const forwardLongList = function (longLen, shortLen, head) {
  let diff = longLen - shortLen;
  while(diff){
    head = head.next;
    diff --;
  }
}


// 补差法，链表拼接，将两个链表设置为等长

const getIntersectionNode2 = function (headA, headB) {
  let [curA,curB] = [headA,headB];
  while(curA !== curB){
    curA = (curA === null ? headB: curA.next);
    curB = (curB === null? headA: curB.next);
  }
  return curA;
}
