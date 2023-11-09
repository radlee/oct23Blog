const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
require('dotenv').config();
var cors = require('cors');
var cookieParser = require('cookie-parser');

const errorHandler = require('./middlewares/error')

//Import routes
const authRoutes = require('./routes/authRoutes')
const postRoute  = require('./routes/postRoute')

//DB Connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
    .then(() => console.log("Database successfully connected"))
    .catch((err) => console.log(err));


//Middleware 
app.use(morgan('dev'));
app.use(bodyParser.json({ limit: '5mb'}));
app.use(bodyParser.urlencoded({
    limit: '5mb',
    extended: true
}));

app.use(cookieParser());
app.use(cors());

//Routes Middlewares
app.use('/api', authRoutes);
app.use('/api',postRoute);

//error middleware
app.use(errorHandler);

//PORT

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
    console.log(`\nOct23 Server running on PORT: ${PORT}`);
});

