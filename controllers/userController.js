var dbConfig = require('../util/dbconfig');
function rand(min,max){
    return Math.floor(Math.random()*(max-min))+min
}
//获取用户列表
getUser = (req, res) => {
    var sql = 'select * from user';
    var sqlArr = [];
    var callBack = (err, data) => {
        if (err) {
            console.log('连接出错')
        } else {
            res.send({
                'list': data
            })
        }
    }
    dbConfig.sqlConnect(sql, sqlArr, callBack);
}
//通过用户名获取用户信息
getUserByname=(req,res)=>{
    let {username} = req.query;
    var sql = 'select * from user where username=?';
    var sqlArr = [username];
    var callBack = (err, data) => {
        if (err) {
            console.log('连接出错')
        } else {
            console.log(sqlArr);
            res.send({
                'list': data
            })
        }
    }
    dbConfig.sqlConnect(sql, sqlArr, callBack);
}
//登录
Login=(req,res)=>{
    let username = req.body.username;
    let password = req.body.password;
    //console.log(username);
    //console.log(password);
    var sql = 'select count(*) as res from user where username=? and password=?';
    var sqlArr = [username,password];
    var callBack = (err, data) => {
        if (err) {
            console.log('连接出错')
        } else {
            console.log(sqlArr);
            res.send({
                'code':data[0].res
            })
        }
    }
    dbConfig.sqlConnect(sql, sqlArr, callBack);
}

Register=(req,res)=>{
    let username = req.body.username;
    let password = req.body.password;
    let phone = req.body.phone;
    //console.log(username);
    //console.log(password);
    var sql = 'INSERT INTO USER (username,password,phone) VALUE (?,?,?)';
    var sqlArr = [username,password,phone];
    var callBack = (err, data) => {
        if (err) {
            console.log('连接出错')
        } else {
            console.log(sqlArr);
            res.send(data);
        }
    }
    dbConfig.sqlConnect(sql, sqlArr, callBack);
}
sendCode=(req,res)=>{
    let phone = req.query.phone;
    let code = rand(1000,9999);
    res.send({
        'code':200,
        'msg':'发送成功'
    })
    console.log(phone)
    console.log(code)
}
getOrderListLength=(req,res)=>{
    let {uid} = req.query;
    var sql = 'SELECT COUNT(*) AS res FROM orders WHERE uid=?';
    var sqlArr = [uid];
    var callBack = (err, data) => {
        if (err) {
            console.log('连接出错')
        } else {
            console.log(sqlArr);
            res.send(data)
        }
    }
    dbConfig.sqlConnect(sql, sqlArr, callBack);
}
getFocusListLength=(req,res)=>{
    let {uid} = req.query;
    var sql = 'select count(*) as res from focus where uid=?';
    var sqlArr = [uid];
    var callBack = (err, data) => {
        if (err) {
            console.log('连接出错')
        } else {
            console.log(sqlArr);
            res.send(data)
        }
    }
    dbConfig.sqlConnect(sql, sqlArr, callBack);
}
getFeedbackListLength=(req,res)=>{
    let {uid} = req.query;
    var sql = 'select count(*) as res from feedback where uid=?';
    var sqlArr = [uid];
    var callBack = (err, data) => {
        if (err) {
            console.log('连接出错')
        } else {
            console.log(sqlArr);
            res.send(data)
        }
    }
    dbConfig.sqlConnect(sql, sqlArr, callBack);
}
module.exports={
    getUser,
    getUserByname,
    Login,
    sendCode,
    Register,
    getOrderListLength,
    getFocusListLength,
    getFeedbackListLength,
}