import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import react1Router from './routes/react1';
import react2Router from './routes/react2';
import react3Router from './routes/react3';
import react4Router from './routes/react4';
import react5Router from './routes/react5';
import weatherRouter from './routes/weather';

var indexRouter = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'webroot')));
app.use('/dist', express.static(path.join(__dirname, '../dist')));

app.use('/', indexRouter);
app.use('/react1', react1Router);
app.use('/react2', react2Router);
app.use('/react3', react3Router);
app.use('/react4', react4Router);
app.use('/react5', react5Router);
app.use('/weather', weatherRouter);

// importでもrequire()でも読み込めるように2種類export
module.exports = app;
export default app;
