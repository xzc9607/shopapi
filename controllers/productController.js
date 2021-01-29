var dbConfig = require('../util/dbconfig');

//获取产品列表
getProductlist = (req, res) => {
    var sql = 'select * from product';
    var sqlArr = [];
    var callBack = (err, data) => {
        if (err) {
            console.log('连接出错')
        } else {
            res.send(data);
        }
    }
    dbConfig.sqlConnect(sql, sqlArr, callBack);
}

searchProduct = (req, res)=>{
    let {keyword} = req.query;
    var sql = 'SELECT * FROM product WHERE productname LIKE "%'+keyword+'%"';
    var sqlArr = [keyword];
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
    getProductlist,
    searchProduct
}