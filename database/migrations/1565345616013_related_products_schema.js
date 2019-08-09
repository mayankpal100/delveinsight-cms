'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RelatedProductsSchema extends Schema {
  up () {
    this.create('related_products', (table) => {
     
      table.integer('product_id').unsigned();
      table.integer('related_product_id').unsigned();

      table.primary(['product_id', 'related_product_id']);
      table.foreign('product_id').references('id').on('products').onDelete('cascade');
      table.foreign('related_product_id').references('id').on('products').onDelete('cascade');
     
    })
  }

  down () {
    this.drop('related_products')
  }
}

module.exports = RelatedProductsSchema
