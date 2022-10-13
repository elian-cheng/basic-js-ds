const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  queue = null;
  getUnderlyingList() {
    return this.queue;
  }

  enqueue(value) {
    if (!this.queue) this.queue = new ListNode(value);
    else {
      let list = this.queue;
      while (list.next) list = list.next;
      list.next = new ListNode(value);
    }
  }

  dequeue() {
    let list = this.queue;
    if (list) this.queue = this.queue.next;
    return list.value;
  }
}

module.exports = {
  Queue,
};
