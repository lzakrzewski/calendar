import mongodb from 'mongodb';
import _ from 'lodash';

const url = 'mongodb://127.0.0.1:27017/';
const mongoClient = require('mongodb').MongoClient;

let connection = null;

export const connect = () => {
    if (connection) {
      //  return new Promise(() => connection);
    }

    return mongoClient.connect(url)
        .then(db => {
            connection = db.db('calendar');

            return connection;
        });
};

export const getEvents = (userId) => {
    return connect()
        .then(connection => {
            return connection
                .collection("events")
                .find({ userId })
                .toArray()
                .then(results => {
                    return results.map(event => {
                        return _.omit(event, ['_id']);
                    })
                })
        });
};

export const add = (event) => {
    return connect()
        .then(connection => {
            return connection.collection("events").insertOne(_.clone(event));
        });
};
