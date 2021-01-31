var dbConfig = require('../util/dbconfig');
//通过UID获取订单信息
getFeedbackListByUid=(req,res)=>{
    let {uid} = req.query;
    var sql = 'SELECT * FROM feedback WHERE uid=?';
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
module.exports={
    getFeedbackListByUid,
}