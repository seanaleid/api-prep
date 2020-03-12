module.exports = {
    intToBoolean,
    booleanToInt,
    showToBody,
    characterToBody
};

function intToBoolean(int) {
    return int === 1 ? true : false;
};

function booleanToInt(bool) {
    return bool === true ? 1 : 0;
};

function showToBody(show){
    const result = {
        ...show,
        watched: intToBoolean(show.watched)
    };

    if(show.characters) {
        result.characters = show.characters.map(character => ({
            ...character,
            like: intToBoolean(character.like)
        }));
    };

    return result;
};

function characterToBody(character) {
    return {
        ...character,
        like: intToBoolean(character.like)
    };
};