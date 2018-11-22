# Would You Rather
The game where pick between 2 awful ideas...

This site will be an aggregator 


## Setup
Getting setup with scripts
`npm install stylelint -g`

Install commitizen

`npm install -g commitizen`

Using the command line tool
Now, simply use git cz instead of git commit when committing.

Alternatively, if you are using NPM 5.2+ you can use npx instead of installing globally:

`npx git-cz`
or as an `npm script`:

```
  ...
  "scripts": {
    "commit": "npx git-cz"
  }
```

## Eslint & Prettier 

The project is using stnadrd eslint with some extra rules. Similarly with Prettier and some custom rules both found in their `rc` files. 

Both these linters get automatically ran when we commit to the project using commitizen. 
