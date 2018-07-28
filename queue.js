class Queue {
  constructor () {
    this.queue = []
    this.length = 0
  }

  add (todo) {
    this.length += 1
    this.queue.push(todo)
    return true
  }

  next () {
    if (this.queue.length > 0) {
      let todo = this.queue.shift()
      todo()
    }
  }
}