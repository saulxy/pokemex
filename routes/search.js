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
router.get('/:pokename', function(req, res, next) {
    //console.log(req.params.pokename.toLowerCase())
    var pokemons = db.get('pokemon').filter(function(o) { return o.ename.toLowerCase().indexOf(req.params.pokename) >=0; }).value()
    res.setHeader('Content-Type', 'application/json')
    //console.log(pokemons)
    res.send(pokemons)
});

module.exports = router;