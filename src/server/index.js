require('babel-register')({
    presets: [ 'env' ]
});

const app = require('./app.js');
app.listen(process.env.PORT || 9001);

module.exports = app;