exports.up = function(knex) {
    return knex.schema.createTable('characters', function(char) {
        char.increments();

        char.integer('show_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('shows')
            .onDelete("CASCADE")
            .onUpdate("CASCADE");

        char.string('name', 128).notNullable();
        char.text('description').notNullable();
        char.boolean('like').defaultTo(false);
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('characters');
};
