const DB = require('../dbConfig.js');
const mappers = require('./mappers.js');

module.exports = {
    get,
    insert,
    update,
    remove,
};

function get(id) {
    let query = DB("characters as c");

    if(id) {
        return query
            .where("c.id", id)
            .first()
            .then( character => {
                if(character) {
                    return mappers.characterToBody(character);
                } else {
                    return null;
                }
            });
    } else {
        return query.then(characters => {
            return characters.map(character => mappers.characterToBody(character));
        });
    }
}
        
function insert(character) {
    return DB('characters')
        .insert(character)
        .then(([id]) => this.get(id));
};

function update(id, changes) {
    return DB("characters")
        .where("id", id)
        .update(changes)
        .then(count => (count > 0 ? get(id) : null))
};

function remove(id) {
    return DB('characters')
        .where("id", id)
        .del();
};