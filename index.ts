export class Queue {
  tasks: any[] = [];

  enqueue(task: any) {
    this.tasks.push(task);
  }

  dequeue() {
    return this.tasks.shift();
  }

  peek() {
    return this.tasks[0];
  }

  size() {
    return this.tasks.length;
  }

  isEmpty() {
    return this.size() === 0;
  }
}
