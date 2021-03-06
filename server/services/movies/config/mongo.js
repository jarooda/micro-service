const { MongoClient } = require('mongodb')
const uri = process.env.MONGO_DB || "mongodb://localhost:27017"
const client = new MongoClient(uri, {useUnifiedTopology: true})
const database = process.env.DATABASE_NAME || "entertainme"

client.connect()

const db = client.db(database)
module.exports = db