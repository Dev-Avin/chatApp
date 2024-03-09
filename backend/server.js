import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authroutes from './routes/authroutes.js';
import messageroutes from './routes/messageroutes.js';
import userRoutes from './routes/userRoutes.js';

import connectToMongoDB from './db/connectToMongoDB.js';

const app = express();


dotenv.config();
const PORT = process.env.PORT||5000; ;
const MONGO_DB_URI = process.env.MONGO_DB_URI;

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth',authroutes);
app.use('/api/messages',messageroutes);
app.use('/api/users',userRoutes );

app.get('/' , (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Listening on port ${PORT}`)
});

