'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SearchTermsSchema extends Schema {
  up () {
    this.create('search_terms', (table) => {
      table.increments()
      table.string('term').unique();
      table.integer('results').unsigned();
      table.integer('hits').unsigned().default(0);  
      table.timestamps()
    })
  }

  down () {
    this.drop('search_terms')
  }
}

module.exports = SearchTermsSchema
