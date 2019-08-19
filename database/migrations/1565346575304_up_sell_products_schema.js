'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UpSellProductsSchema extends Schema {
  up () {
    this.create('up_sell_products', (table) => {
    
      table.integer('product_id').unsigned();
      table.integer('up_sell_product_id').unsigned();

      table.primary(['product_id', 'up_sell_product_id']);
      table.foreign('product_id').references('id').on('products').onDelete('cascade');
      table.foreign('up_sell_product_id').references('id').on('products').onDelete('cascade');
     
    })
  }

  down () {
    this.drop('up_sell_products')
  }
}

module.exports = UpSellProductsSchema
