require('babel-register')({
    presets: [ 'env' ]
});

const app = require('./app.js');
app.listen(9001);

module.exports = app;