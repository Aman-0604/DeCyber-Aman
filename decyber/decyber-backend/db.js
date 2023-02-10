const mongoose = require('mongoose');
// const mongoURI = "mongodb://localhost:27017/decyber-db";
require('dotenv').config({path:__dirname+'/.env'});
const DB = process.env.MONGODB_ATLAS_LINK;
console.log("\n----->DB link is :",DB,"\n\n");
const connectToMongo = async () => {
    mongoose.connect(DB).then(() => {
        console.log("Connected to Mongo Successfuly");
    }).catch((err) => console.log(err));
}
module.exports = connectToMongo;