'use strict';

const { ObjectId } = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
const { ConnectionClosedEvent } = require('mongodb');

const dburi = 'mongodb+srv://azureserver:Rest007@rest.ms872.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

async function find(collection, query) {
    const dbname = "survey";
 
    const client = await MongoClient.connect(dburi, { useNewUrlParser: true });
    const db = client.db(dbname);

    try {
        const result = await db.collection(collection).find(query).toArray();
        return  result;
    }
    finally {
        client.close();
    }
};

async function save(collection, obj) {
    const dbname = "survey";
 
    const client = await MongoClient.connect(dburi, { useNewUrlParser: true });
    const db = client.db(dbname);

    try {
        const result = await db.collection(collection).insertOne(obj);
        return  result;
    }
    finally {
        client.close();
    }
};

async function deleteOne(collection, query) {
    const dbname = "survey";
 
    const client = await MongoClient.connect(dburi, { useNewUrlParser: true });
    const db = client.db(dbname);

    try {
        const result = await db.collection(collection).deleteOne(query);
        return  result;
    }
    finally {
        client.close();
    }
};

async function updateOne(collection, query, newvalues) {
    const dbname = "survey";
 
    const client = await MongoClient.connect(dburi, { useNewUrlParser: true });
    const db = client.db(dbname);

    try {
        const result = await db.collection(collection).updateOne(query, newvalues);
        return  result;
    }
    finally {
        client.close();
    }
};


module.exports.find = find
module.exports.save = save
module.exports.deleteOne = deleteOne
module.exports.updateOne = updateOne