const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db');
const path = require('path ');

dotenv.config({ path: './config/config.env'});

connectDB();

const form = require('./routes/form');

const app = express();

app.use(express.json()); 
 
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

app.use('/api/v1/form', form);

//Serve static assets if in production 
if(process.env.NODE_ENV === 'production'){
    //Set statci folder
    app.use(express.static('client.build'));

    app.get('*', (req, res)=>{
         res.sendFile(path.resolve(__dirname,'client', 'build', 'index.html'));
    })
     
}

const PORT = process.env.PORT || 5001 ;

app.listen(PORT, console.log(`Server running in $(process.env.NODE_ENV) mode on port ${PORT}`.yellow.bold));