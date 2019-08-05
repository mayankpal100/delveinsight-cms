'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PostsSchema extends Schema {
  up () {
    this.create('posts', (table) => {
        table.increments()
        table.string('title', 80).notNullable()
        table.string('post', 80).nullable()
        table.string('author', 150).nullable()
        table.string('slug', 150).nullable().unique()

        table.timestamps()
    })
  }

  down () {
    this.drop('posts')
  }
}

module.exports = PostsSchema
