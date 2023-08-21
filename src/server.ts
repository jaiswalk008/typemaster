import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import bodyParser from 'body-parser';
import sequelize from './utils/database';

const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({extended:false}));
server.use(bodyParser.json());

async function startServer (){
    try {
        await sequelize.sync();
        server.listen(process.env.PORT || 5000);
    } catch (err) {
        console.log(err);
    } 
}
startServer();