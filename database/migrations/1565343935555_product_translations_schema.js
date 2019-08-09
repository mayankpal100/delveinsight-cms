'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductTranslationsSchema extends Schema {
  up () {
    this.create('product_translations', (table) => {
      table.increments()
      table.integer('product_id').unsigned();
      table.string('locale');
      table.string('name');
      table.text('description');
      table.text('short_description').nullable();

      table.unique(['product_id', 'locale']);
      table.foreign('product_id').references('id').on('products').onDelete('cascade');
      table.timestamps()
    })
    
  }

  down () {
    this.drop('product_translations')
  }
}

module.exports = ProductTranslationsSchema
