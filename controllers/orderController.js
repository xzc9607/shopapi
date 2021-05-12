var dbConfig = require('../util/dbconfig');
//通过UID获取订单信息
getOrderListByUid=(req,res)=>{
    let {uid} = req.query;
    var sql = 'SELECT * FROM orders,product WHERE uid=? AND orders.pid=product.pid';
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
addorder=(req,res)=>{
    let uid = req.body.uid;
    let pid = req.body.pid;
    let address = req.body.address;
    let phone = req.body.phone;
    let name = req.body.name;
    var sql = 'INSERT INTO orders (uid,pid,address,phone,name) VALUE (?,?,?,?,?)';
    var sqlArr = [uid,pid,address,phone,name];
    var callBack = (err, data) => {
        if (err) {
            console.log('连接出错')
        } else {
            res.send(data);
        }
    }
    dbConfig.sqlConnect(sql, sqlArr, callBack);
}
module.exports={
    getOrderListByUid,
    addorder,
}