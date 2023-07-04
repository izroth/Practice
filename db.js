 //connect the local monogoose database
 const mongoose = require('mongoose');
 require('dotenv').config();
    const uri = process.env.ATLAS_URI;
    mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }).then
    (() => console.log('Connected to MongoDB Atlas'))
    .catch(err => console.log('Error: ' + err.message));
    
   
//


 