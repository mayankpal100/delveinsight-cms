'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.increments()
      table.integer('tax_class_id',10).unsigned().nullable()
      table.string('slug', 254).unique()
      table.decimal('price', 10).unsigned()
      table.decimal('special_price', 10).unsigned().nullable()
      table.date('special_price_start', 10).nullable()
      table.date('special_price_end', 10).nullable()
      table.decimal('selling_price', 10).unsigned().nullable()
      table.string('sku', 50).nullable()
      table.boolean('manage_stock', 10).nullable()
      table.integer('qty', 10).nullable()
      table.boolean('in_stock', 10)
      table.integer('viewed', 10).unsigned().default(0)
      table.boolean('is_active')
      table.datetime('new_from',).nullable()
      table.datetime('new_to').nullable()
      table.datetime('deleted_at').nullable()
       table.timestamps()

     
         })
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductSchema
