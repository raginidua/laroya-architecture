const express        = require('express');
const morgan         = require('morgan');
const bodyParser     = require('body-parser');
const cors           = require('cors');
const mongoose       = require('mongoose');
const expressJWT     = require('express-jwt');
const User           = require('./models/user');
const jwt            = require('jsonwebtoken');


const app            = express();
const config         = require('./config/config');
const apiRouter      = require('./config/apiRoutes');
const webRouter      = require('./config/webRoutes');

mongoose.connect(config.db);

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(`${__dirname}/public`));

app.use('/api', expressJWT({ secret: config.secret })
  .unless({
    path: [
      { url: '/api/register', methods: ['POST'] },
      { url: '/api/login',    methods: ['POST'] },
      { url: '/api/users',    methods: ['GET'] },
      { url: '/api/projects/:id',    methods: ['GET'] },
      { url: '/api/projects/:id',    methods: ['PUT'] },
      { url: '/api/projects',    methods: ['GET'] },
      { url: '/api/projects',    methods: ['POST'] }
    ]
  }));
app.use(jwtErrorHandler);

function jwtErrorHandler(err, req, res, next){
  if (err.name !== 'UnauthorizedError') return next();
  return res.status(401).json({ message: 'Unauthorized request.' });
}

app.use('/', webRouter);
app.use('/api', apiRouter);

app.listen(config.port, () => console.log(`Express started on port: ${config.port}`));
