const mongoose = require('mongoose');
// const mongoURI = "mongodb://localhost:27017/decyber-db";
const DB = "mongodb+srv://decyber:decyber123@cluster0.tu8wed5.mongodb.net/decyber?retryWrites=true&w=majority";

const connectToMongo = async () => {
    mongoose.connect(DB).then(() => {
        console.log("Connected to Mongo Successfuly");
    }).catch((err) => console.log(err));
}
module.exports = connectToMongo;