const storage = require('@google-cloud/storage')();
const url = require('url');
const moment = require('moment');
const Datastore = require('@google-cloud/datastore');

exports.datastore_crasher = (req, res) => {

    console.log("Hi there")
}
