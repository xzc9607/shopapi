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
    var firstsql= 'SELECT COUNT(*) AS res FROM focus WHERE uid=? AND pid=?';
    var sql = 'INSERT INTO focus (uid,pid) VALUE (?,?)';
    var sqlArr = [uid,pid];
    var callBack = (err, data) => {
        if (err) {
            console.log('连接出错')
        } else {
            if(data[0].res > 0){
                res.send({code:0});
            }else{
                dbConfig.sqlConnect(sql, sqlArr, callBack2);
                //res.send(data);
            }
            //console.log(data[0].res);
            
        }
    }
    var callBack2 = (err, data) => {
        if (err) {
            console.log('连接出错')
        } else {
            //console.log(data[0].res);
            res.send(data);
        }
    }
    dbConfig.sqlConnect(firstsql, sqlArr, callBack);
}
module.exports={
    getFocusListByUid,
    AddFocus,
}