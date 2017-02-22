var express = require('express');
var router = express.Router();

const todoModel = require('../model/index');


router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

// 给路由先指定路径，再指定方法，还可以链式调用
router.route('/todos').get((req, res, next) => {
    todoModel.find({}, (err, todos) => {
        if (err) {
            res.send({code: 0, msg: '查询失败'});
        } else {
            res.send(todos);
        }
    })
}).post((req, res) => {
    let todo = req.body;
    todoModel.create(todo, (err, todo) => {
        if (err) {
            res.send({code: 0, msg: '查询失败'})
        } else {
            // 把保存到数据库中之后的对象发送给客户端
            res.send(todo);
        }
    });
});

/*router.get('/todos', function (req, res, next) {

 if (err) {
 res.send({code: 0, msg: '查询失败'});
 } else {
 todoModel.find({}, (err, todos) => {
 res.send(todos);
 })

 }
 });*/


/*router.post('/todos', (req, res) => {
 let todo = req.body;
 todoModel.create(todo, (err, todo) => {
 if (err) {
 res.send({code: 0, msg: '查询失败'})
 } else {
 // 把保存到数据库中之后的对象发送给客户端
 res.send(todo);
 }
 });
 });*/


// 删除操作
router.route('/todos/:_id').delete((req, res) => {
    todoModel.remove({_id: req.params._id}, (err, result) => {
        if(err) {
           console.log(err);
           res.send({code:0,msg:'删除失败!'});
        } else {
            // 把保存到数据库中之后的对象发送给客户端
            res.send({code:1, msg:'删除成功'});
        }

    });

});

router.route('/todos/:_id').delete((req, res) => {
    let ids = req.body;
    todoModel.remove({_id:{$id:ids}}, (err, result) => {
        if(err) {
            console.log(err);
            res.send({code:0,msg:'删除失败!'});
        } else {
            // 把保存到数据库中之后的对象发送给客户端
            res.send({code:1, msg:'删除成功'});
        }

    });

});


module.exports = router;
