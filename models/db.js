const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, (err) => {
  if (!err) {
    console.log('Connected Successfully');
  } else {
    console.log('Error in MongoDB connection: ', JSON.stringfy(err, undefined, 2));
  }
});

require('./users.model.js');
