import router from './routes/admin.js'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
mongoose.connect(process.env.DB_URL, () => { 
    console.log('connected')
})

app.use(router)


app.listen(process.env.PORT, () => {
    console.log('server listening on port 3000');

})