import { Queue } from "./index";

it("should push an item to the queue", () => {
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  expect(queue.tasks).toStrictEqual([1, 2]);
});

it("should pop an item from the queue", () => {
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  expect(queue.dequeue()).toBe(1);
  expect(queue.tasks).toStrictEqual([2]);
});

it("should peek at the top item from the queue", () => {
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  expect(queue.peek()).toBe(1);
  expect(queue.tasks).toStrictEqual([1, 2]);
});

it("should return the size of the queue", () => {
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  expect(queue.size()).toBe(2);
});

it("should return whether the queue is empty", () => {
  const queue = new Queue();
  expect(queue.isEmpty()).toBe(true);
  queue.enqueue(1);
  expect(queue.isEmpty()).toBe(false);
});
