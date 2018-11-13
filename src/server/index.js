require('babel-register')({
    presets: [ 'env' ]
});

const app = require('./app.js');
const config = require('./../../config/default');

app.listen(config.PORT || 9001);

module.exports = app;
