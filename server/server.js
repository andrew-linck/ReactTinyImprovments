const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


mongoose.connect('mongodb://localhost/kudos', { useNewUrlParser: true });


require('./routes.js')(app);


app.listen(PORT, function() {
  console.log(`App running on port ${PORT}`);
});
