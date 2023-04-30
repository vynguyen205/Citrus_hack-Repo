const express = require('express');
// const session = require('express-session');
const routes = require('./controllers');
const http = require('http');

const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const path = require('path');

const sequelize = require('./config/connection');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;
const server = http.createServer(app);


// Define template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// this allows you to parse the body of the request
app.use(express.json());
// // this allows you to use the req.body object to access the body of the request
app.use(express.urlencoded({ extended: true }));
// this allows you to use a static folder (unchanged files)
app.use(express.static(path.join(__dirname, 'public')));


app.use(routes);

sequelize.sync({ force: false }).then(() => {
  server.listen(PORT, () =>
    console.log(`🌎 API Server now listening on http://localhost:${PORT} 🌎`)
  );
});


//not needed code rn

// const sess = {
//   secret: 'Super secret secret',
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize
//   })
// };

// app.use(session(sess));