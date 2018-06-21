var express = require('express');
var router = express.Router();

//TODO: Refactoring pending
/**/
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('./assets/pokedex.json')
const db = low(adapter)

// Set some defaults (required if your JSON file is empty)
db.defaults({ pokemon: [] }).write()

var pokemons = db.get('pokemon').sortBy('id').slice(0,40).value()
/**/

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { pokemons: pokemons });
});

module.exports = router;
