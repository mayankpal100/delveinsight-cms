'use strict'

const Task = use('Task')

class Notification extends Task {
  static get schedule () {
    return '0 */1 * * * *'
  }

  async handle () {
    this.info('Task Notification handle')
  }
}

module.exports = Notification
