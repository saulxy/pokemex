# Pokemex
Online Spanish Pokedex (Even when is documented in English). The main goal is to have an easy way to check a full pokedex from your computer or any device with Internet access. In addition, the incognito mode is feature to use it even when is not appropiate (Ex. School, Office, etc.)

# Setting up your workspace
No additional steps needed. Just get all the dependencies and run to test:

```
DEBUG=pokemex:* npm start
```

To preview it:

```
http://localhost:8080/
```

If port 8080 is not free, it can be changed in /[ROOT_FOLDER]/bin/www

```
var port = normalizePort(process.env.PORT || '8080');
```

# Datasource
All the data is stored in a single JSON file to work as a pivot for the main screen. No DBD is needed and any new entry or updated can be included manually in /[ROOT_FOLDER]/assets/pokedex.json

## LEGAL

### Pokémon

Pokémon images, names and information (c) 1995-2019 Nintendo/Game freak.
