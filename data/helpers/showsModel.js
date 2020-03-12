const DB = require('../dbConfig.js');
const mappers = require('./mappers.js');

module.exports = {
    get,
    insert,
    update,
    remove,
    getShowsCharacters
};

function get(id) {
    let query = DB("shows as s");

    if(id) {
        query.where("s.id", id).first();

        const promises = [query, getShowsCharacters(id)]; // [ shows, characters ]

        return Promise.all(promises)
            .then(function(results) {
                let [show, characters] = results;

            if(show) {
                show.characters = characters;

                return mappers.showToBody(show);
            } else {
                return null;
            }
            })
            .catch(() => {
                res.status(500).json({ message: "There's a problem with the promises in showsModel.js"})
            });
    } else {
        return query.then(shows => {
            return shows.map(show => mappers.showToBody(show));
        });
    };
};

function insert(show) {
    return DB("shows")
        .insert(show)
        .then(([id]) => this.get(id));
};

function update(id, changes) {
    return DB("shows")
        .where("id", id)
        .update(changes)
        .then(count => (count > 0 ? get(id) : null))
};

function remove(id) {
    return DB("shows")
        .where("id", id)
        .del();
};

function getShowsCharacters(showId) {
    return DB("characters")
        .where("show_id", showId)
        .then(characters => characters.map(character => mappers.characterToBody(character)));
};