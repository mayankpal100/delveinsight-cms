'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductCategoriesSchema extends Schema {
  up () {
    this.create('product_categories', (table) => {
            table.integer('product_id').unsigned();
            table.integer('category_id').unsigned();
            table.primary(['product_id', 'category_id']);
            
            table.foreign('product_id').references('id').on('products');
            table.foreign('category_id').references('id').on('categories').onDelete('cascade');
    })
  }

  down () {
    this.drop('product_categories')
  }
}

module.exports = ProductCategoriesSchema
