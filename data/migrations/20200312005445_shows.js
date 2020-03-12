
exports.up = function(knex) {
    return knex.schema.createTable('shows', function(shows){
        shows.increments();
        
        shows.string('name', 128).notNullable();
        shows.text('description').notNullable();
        shows.boolean('watched').defaultTo(false);
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('shows');
};
