let fs = require('fs');
let multer = require('multer');
let moment = require('moment');
var express = require('express');
var router = express.Router();
var user = require('../controllers/userController');
const dbconfig = require('../util/dbconfig');
let upload = multer({dest:'./public/images'}).single('file')
var app=require('../app').temp;

/* GET home page. */
router.get('/', user.getUser);
router.get('/getImgByUid', user.getImgByUid);
router.get('/getImgListByUid', user.getImgListByUid);
router.get('/getImgCountByUid', user.getImgCountByUid);
router.get('/getUserByname',user.getUserByname);
router.get('/delImg',user.delImg);
router.get('/getUserById',user.getUserById);
router.get('/getOrderListLength',user.getOrderListLength);
router.get('/getFocusListLength',user.getFocusListLength);
router.get('/getFeedbackListLength',user.getFeedbackListLength);
router.post('/Login',user.Login);
router.post('/sendCode',user.sendCode);
router.post('/Register',user.Register);
router.post('/uploadimg',upload,function(req,res){
    let file = req.file;
    console.log(file);
    fs.renameSync('./public/images/'+ file.filename, './public/images/' + file.originalname);
    res.set({
        'content-type': 'application/json; charset=utf-8'
    });
    let userid = 1;
    let label = '';
    let imgUrl= 'http://192.168.31.210:3000/images/'+file.originalname;
    let sql = 'INSERT INTO img (url,time,uid,label) VALUE (?,?,1,?)';
    console.log(global.templabel);
    if(global.templabel===0){
        label='人物';
    }else if(global.templabel===1){
        label='动物';
    }else if(global.templabel===2){
        label='风景';
    }else if(global.templabel===3){
        label='交通工具';
    }else if(global.templabel===4){
        label='建筑';
    }else if(global.templabel===5){
        global.templabel=0;
    }
    let sqlArr = [imgUrl,moment().format('YYYY-M-D'),label];
    console.log(sqlArr);
    dbconfig.sqlConnect(sql,sqlArr,(err,data)=>{
        if(err){
            console.log(err);
            throw '出错了'
        }else{
            if(data.affectedRows===1){
                global.templabel=global.templabel+1;
                res.send({
                    'code':200,
                    'msg':'上传成功',
                    'url':imgUrl
                })
            }else{
                res.send({
                    'code':400,
                    'msg':'上传失败',
                })
            }
        }
    })
});
router.get('/test',user.test);


module.exports = router;
