import express from 'express';
import dotenv from 'dotenv';

import authroutes from './routes/authroutes.js'
import connectToMongoDB from './db/connectToMongoDB.js';

const app = express();

dotenv.config();
const PORT = process.env.PORT ;
const MONGO_DB_URI = process.env.MONGO_DB_URI;

app.use(express.json());
app.use('/api/auth',authroutes)

app.get('/' , (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Listening on port ${PORT}`)
});

