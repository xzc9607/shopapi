var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

var http = require('http');
var server = http.createServer(app);


app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//静态资源
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json({limit: '1mb'}));//body-parser 解析json格式数据
app.use(bodyParser.urlencoded({extended:true}));//允许POST请求
app.use('/', indexRouter);
app.use('/users', usersRouter);

server.listen('3000');
