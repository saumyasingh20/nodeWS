//require the library
const mongoose = require('mongoose');

//connect to the database
mongoose.connect('mongodb://localhost/contact_list_db');

//acquire the connection (to check if it is succesful)
const db = mongoose.connection;

//error if db doesnt connect
db.on('error',console.error.bind(console,'error connecting to db'));

//db up and running then print msg
db.once('open',function(){
    console.log('successfully connected to database');
})