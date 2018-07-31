# Would You Rather
The game where pick between 2 awful ideas...

This site will be an aggregator 


## Setup
Install commitizen

npm install -g commitizen

Install the hutber-conventional-changelog package.

npm install --save-dev hutber-conventional-changelog

Init commitizen configuration

commitizen init hutber-conventional-changelog --save-dev --save-exact

Usage
npm run commit

## Eslint & Prettier 

The project is using stnadrd eslint with some extra rules. Similarly with Prettier and some custom rules both found in their `rc` files. 

Both these linters get automatically ran when we commit to the project using commitizen. 
