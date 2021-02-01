var dbConfig = require('../util/dbconfig');
//通过UID获取订单信息
getFocusListByUid=(req,res)=>{
    let {uid} = req.query;
    var sql = 'SELECT * FROM focus,product WHERE uid=? AND focus.pid=product.pid';
    var sqlArr = [uid];
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

AddFocus=(req,res)=>{
    let uid = req.body.uid;
    let pid = req.body.pid;
    var sql = 'INSERT INTO focus (uid,pid) VALUE (?,?)';
    var sqlArr = [uid,pid];
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
module.exports={
    getFocusListByUid,
    AddFocus,
}