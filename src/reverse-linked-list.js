import { ListNode } from "./helpers/ListNode.model.js";
import { log } from "./helpers/log.js";

/*
  1. https://leetcode.com/problems/reverse-linked-list/
 */

const reverseListWithIteration = function (head) {
  if (!head) return head;

  let prev = null;
  let curr = head;

  while (curr) {
    const saved = curr.next;
    curr.next = prev;
    prev = curr;
    curr = saved;
  }

  return prev;
};

log(reverseListWithIteration(ListNode.createSampleNodeList())); // [5,4,3,2,1,0]
