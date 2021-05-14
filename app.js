var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productRouter = require('./routes/product');
var ordersRouter = require('./routes/orders');
var focusRouter = require('./routes/focus');
var feedbackRouter = require('./routes/feedback');

var app = express();

var http = require('http');
var server = http.createServer(app);

var temp=0;
global.templabel=temp;

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//静态资源
app.use(express.static(path.join(__dirname, 'public')));
//app.use('/static', express.static('public'))

app.use(bodyParser.json({limit: '1mb'}));//body-parser 解析json格式数据
app.use(bodyParser.urlencoded({extended:true}));//允许POST请求
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/product', productRouter);
app.use('/orders', ordersRouter);
app.use('/focus', focusRouter);
app.use('/feedback', feedbackRouter);

server.listen('3000');
