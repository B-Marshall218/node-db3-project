const db = require("../data/db-config");

module.exports = {
    find,
    findById,
    findSteps,
    add,
    addStep,
    update,
    remove
}

function find() {
    return db("Schemes")
}

function findById(id) {
    return db("Schemes")
        .where({ id })
        .first();
}

function findSteps(id) {
    return db("steps")
        // .join("Schemes as sc", "st.scheme_id", "sc.id")
        // .select("st.id", "scheme_name",)
        .where({ scheme_id: id })
}
function add(scheme) {
    return db("Schemes").insert(scheme)
        .then(ids => {
            return findById(ids[0]);
        })
}

function addStep(stepData, scheme_id) {
    return db("steps").insert(stepData)
        .where(scheme_id, id)
    // .then(ids => {
    //     return findById(ids[0]);
    // })
}

function update(changes, id) {
    return db("Schemes").where({ id }).update(changes)
}

function remove(id) {
    return db("Schemes").where({ id }).delete();
}