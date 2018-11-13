const config = {
    BASE_URL: process.env.BASE_URL || 'http://localhost:9001',
    PORT: process.env.PORT || 9001,
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/calendar'
};

module.exports = config;
