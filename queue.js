class Queue {
  constructor () {
    this.active = false
    this.queue = []
    this.length = 0
  }

  add (todo) {
    this.length += 1
    this.queue.push(todo)
    if (!this.active)
      this.next()
  }

  next () {
    if (this.queue.length > 0) {
      let todo = this.queue.shift()
      this.active = true
      todo()
    } else {
      this.active = false
    }
  }
}

module.exports = Queue