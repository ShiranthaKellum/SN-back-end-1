const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/sn-db';
const userRouter = require('./routes/users');

const app = express();

mongoose.connect(url);
const con = mongoose.connection;

con.on('open', () => {
    console.log('############### Connected ####################');
})

app.use(express.json());
app.use('/users', userRouter);

app.listen(9000, () => {
    console.log('############### Server is stared #############');
})