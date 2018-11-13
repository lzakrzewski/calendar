import moment from 'moment';
import mongodb from 'mongodb';
import _ from 'lodash';
import { MONGODB_URI } from './../../../config/default';

const mongoClient = mongodb.MongoClient;

let connection = null;

const connect = async () => {
    if (connection) {
        return connection;
    }

    const db = await mongoClient.connect(MONGODB_URI, { useNewUrlParser: true });

    connection = db.db();

    return connection;
};

export const getEventsCollection = async() => {
    const connection = await connect();

    return connection.collection('events');
};

export const hasEvents = async(userId) => {
    if (!userId) {
        return false;
    }

    const collection = await getEventsCollection();
    const count = await collection.find({ userId }).count();

    return count > 0;
};

export const fetchEvents = async(userId, month) => {
    let currentMonth = moment()
        .startOf('month')
        .startOf('day');

    if (month) {
        currentMonth = moment(month);
    }

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
            });
        });
};

export const add = async(event) => {
    const collection = await getEventsCollection();

    return collection.insertOne(_.clone(event));
};
