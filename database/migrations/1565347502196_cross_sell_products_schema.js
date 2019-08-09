'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CrossSellProductsSchema extends Schema {
  up () {
    this.create('cross_sell_products', (table) => {
      table.integer('product_id').unsigned();
      table.integer('cross_sell_product_id').unsigned();

      table.primary(['product_id', 'cross_sell_product_id']);
      table.foreign('product_id').references('id').on('products').onDelete('cascade');
      table.foreign('cross_sell_product_id').references('id').on('products').onDelete('cascade');
    })
  }

  down () {
    this.drop('cross_sell_products')
  }
}

module.exports = CrossSellProductsSchema
