'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CategoryTranslationsSchema extends Schema {
  up () {
    this.create('category_translations', (table) => {
      table.increments()
      table.integer('category_id').unsigned();
      table.string('locale');
      table.string('name');

      table.unique(['category_id', 'locale']);
      table.foreign('category_id').references('id').on('categories')
      table.timestamps()
    })
  }

  down () {
    this.drop('category_translations')
  }
}

module.exports = CategoryTranslationsSchema
