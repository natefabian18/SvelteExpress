import { MongoClient } from "mongodb";
import { resolve } from "path";

const path = require("path");
const root = require(path.join(__dirname, "../secret.js"));

//const MongoClient = require("mongodb").MongoClient;
const uri = `mongodb+srv://${root.user}:${root.userPass}@cluster0.matuk.mongodb.net/${root.database}?retryWrites=true&w=majority`;
//const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function getDatabase() {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  let databaseData: Array<any> = [];
  let promise = new Promise((res) => {
    client.connect(async (err: Error) => {
      if (err) {
        console.log("error happened");
      }
      const collection = client.db("test").collection("devices");
      // perform actions on the collection object
      //read everyting in the database
      const cursor = collection.find();
      while (await cursor.hasNext()) {
        databaseData.push(await cursor.next());
      }

      client.close();
      res("finished");
    });
  });

  await promise;
  return databaseData;
}

function writeArray(dataToInsert: Array<any>, callback?: Function) {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  client.connect(async (err: Error) => {
    let iPromise = new Promise((res, rej) => {
      if (err) {
        console.log("error happened");
        rej("connection failed");
      }
      const collection = client.db("test").collection("devices");
      // perform actions on the collection object
      //read everyting in the database

      //add item to database
      //item to add
      collection.insertMany(dataToInsert, () => {
        if (callback != undefined) {
          callback();
          res("succ");
        }
      });
    });

    iPromise.then(() => {
      client.close();
    });
  });
  return true;
}

function generateEmptyClient() {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  return client;
}

export = {
  writeArray,
  getDatabase,
  generateEmptyClient,
};
