# react-enzyme-tutorial

https://semaphoreci.com/community/tutorials/testing-react-components-with-enzyme-and-mocha


To  get around a silly issue using mocha -w where the sinon sandbox isn't properly resetting, install `nodemon` instead.

`npm install -g nodemon`

then run

`nodemon -w . -d 0 --exec npm test`

if you don't want to install it globally:

`npm install --save-dev nodemon`
then return

`./node_modules/.bin/nodemon -w . -d 0 --exec npm test`
