var dbConfig = require('../util/dbconfig');
let moment = require('moment');
function rand(min,max){
    return Math.floor(Math.random()*(max-min))+min
}
//测试
test = (req, res) => {
    res.send(moment().format('YYYY-M-D'));
}
//获取相册列表
getImgByUid = (req, res) => {
    let {uid} = req.query;
    var ob=[];
    var cell={
        time:'',
        data:[]
    };
    var sql = 'select * from img where uid=? order by imgid DESC';
    var sqlArr = [uid];
    var callBack = (err, data) => {
        if (err) {
            console.log('连接出错')
        } else {
            res.send(data);
        }
    }
    dbConfig.sqlConnect(sql, sqlArr, callBack);
}
//获取云端照片数量
getImgCountByUid = (req, res) => {
    let {uid} = req.query;
    var sql = 'SELECT COUNT(*) AS count FROM img WHERE uid=?';
    var sqlArr = [uid];
    var callBack = (err, data) => {
        if (err) {
            console.log('连接出错')
        } else {
            res.send(data[0]);
        }
    }
    dbConfig.sqlConnect(sql, sqlArr, callBack);
}
//获取相册url列表
getImgListByUid = (req, res) => {
    let {uid} = req.query;
    var ob=[];
    var cell={
        time:'',
        data:[]
    };
    var sql = 'select url from img where uid=? order by imgid DESC';
    var sqlArr = [uid];
    var callBack = (err, data) => {
        if (err) {
            console.log('连接出错')
        } else {
            res.send(data);
        }
    }
    dbConfig.sqlConnect(sql, sqlArr, callBack);
}
//删除云端照片
delImg=(req,res)=>{
    let {imgid} = req.query;
    var sql = 'DELETE FROM img WHERE imgid=?';
    var sqlArr = [imgid];
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

getUserById=(req,res)=>{
    let {uid} = req.query;
    var sql = 'select * from user where uid=?';
    var sqlArr = [uid];
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
    getUserById,
    getImgByUid,
    delImg,
    getImgListByUid,
    getImgCountByUid,
    test,
}