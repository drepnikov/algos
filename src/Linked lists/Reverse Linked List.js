import { ListNode } from "../helpers/LisNode.model.js";
import { log } from "../helpers/log.js";

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

const reverseListWithRecursion = function (head) {};

log(reverseListWithIteration(ListNode.createSampleNodeList()));
