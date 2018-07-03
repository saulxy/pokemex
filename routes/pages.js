var express = require('express');
var router = express.Router();

//TODO: Refactoring pending
/**/
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('./assets/pokedex.json')
const db = low(adapter)
db.defaults({ pokemon: [] }).write()
/**/

/* GET pokemons listing. */
router.get('/:page', function(req, res, next) {
    var pagenum = parseInt(req.params.page)
    var pokemons = pagenum >= 0 ? db.get('pokemon').sortBy('id').slice(40*pagenum,(40*pagenum) + 40).value()
                               : db.get('pokemon').sortBy('id').value()
    res.setHeader('Content-Type', 'application/json')
    res.send(pokemons)
});

module.exports = router;