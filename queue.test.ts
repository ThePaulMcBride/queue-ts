import { Queue } from "./index";

it("should push an item to the stack", () => {
  const stack = new Queue();
  stack.enqueue(1);
  stack.enqueue(2);
  expect(stack.tasks).toStrictEqual([1, 2]);
});

it("should pop an item from the stack", () => {
  const stack = new Queue();
  stack.enqueue(1);
  stack.enqueue(2);
  expect(stack.dequeue()).toBe(1);
  expect(stack.tasks).toStrictEqual([2]);
});

it("should peek at the top item from the stack", () => {
  const stack = new Queue();
  stack.enqueue(1);
  stack.enqueue(2);
  expect(stack.peek()).toBe(1);
  expect(stack.tasks).toStrictEqual([1, 2]);
});

it("should return the size of the stack", () => {
  const stack = new Queue();
  stack.enqueue(1);
  stack.enqueue(2);
  expect(stack.size()).toBe(2);
});

it("should return whether the stack is empty", () => {
  const stack = new Queue();
  expect(stack.isEmpty()).toBe(true);
  stack.enqueue(1);
  expect(stack.isEmpty()).toBe(false);
});
