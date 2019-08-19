'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CategoriesSchema extends Schema {
  up () {
    this.create('categories', (table) => {
      table.increments()
      table.integer('parent_id').unsigned().nullable();
      table.string('slug').unique();
      table.integer('position').unsigned().nullable();
      table.boolean('is_searchable');
      table.boolean('is_active');
      table.timestamps();

      table.foreign('parent_id').references('id').on('categories').onDelete('cascade');
      
    })
  }

  down () {
    this.drop('categories')
  }
}

module.exports = CategoriesSchema
