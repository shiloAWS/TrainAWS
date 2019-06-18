
exports.up = function(knex, Promise) {
  return knex.schema.createTable('User', table =>{
      table.increments();
      table.string('name').notNullable()
  })
   .createTable('Note', table =>{
    table.increments()
    table.string('data').notNullable()
  })
   .createTable('UserNote', table =>{
    table.integer('userID').unsigned().references('id').inTable('User');  
    table.integer('noteID').unsigned().references('id').inTable('Note');  
    }) 
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTable('UserNote')
  .dropTable('Note')
  .dropTable('User')

};
