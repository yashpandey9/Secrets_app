require('dotenv').config();
const express = require('express');
const app = express();
const connectionDB = require('./server/database/connection');
const routes = require('./server/router/routes');

//connecting MongoDB
connectionDB();

// set the view engine to ejs
app.set('view engine', 'ejs');

// using app.use to serve up static CSS files in public/assets/ folder when /public link is called in ejs files
app.use('/public', express.static('public'));

//parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//routing
app.use(routes);

//printing the process id 
const server = app.listen(process.env.PORT || 3000, () => {
    console.log(process.pid);
    console.log(`on process id: ${process.pid}`);
});
