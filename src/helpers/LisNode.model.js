export class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }

  valueOf() {
    if (!this) return [];
    let result = [this];

    while (true) {
      const last = result[result.length - 1].next;
      if (last) {
        result.push(last);
      } else {
        break;
      }
    }

    return result.map((node) => node.val);
  }

  static createSampleNodeList() {
    return new ListNode(
      0,
      new ListNode(
        1,
        new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
      )
    );
  }
}
