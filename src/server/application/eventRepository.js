import moment from 'moment';
import mongodb from 'mongodb';
import _ from 'lodash';

const url = 'mongodb://127.0.0.1:27017/';
const mongoClient = mongodb.MongoClient;

let connection = null;

const connect = async () => {
    if (connection) {
        return connection;
    }

    const db = await mongoClient.connect(url);

    connection = db.db('calendar');
    return connection;
};

export const getEventsCollection = async() => {
    const connection = await connect();

    return connection.collection("events");
};

export const fetchEvents = async(userId, currentMonth) => {
    const collection = await getEventsCollection();

    const startOfMonth = moment(currentMonth)
        .startOf('month')
        .startOf('day');

    const endOfMonth = moment(currentMonth)
        .endOf('month')
        .endOf('day');

    return collection
        .find({
            userId,
            start: { $lt: endOfMonth.format() },
            end: { $gte: startOfMonth.format() }
        })
        .sort( { start: 1 } )
        .toArray()
        .then(results => {
            return results.map(event => {
                return _.omit(event, ['_id']);
            })
        });
};

export const add = async(event) => {
    const collection = await getEventsCollection();

    return collection.insertOne(_.clone(event));
};