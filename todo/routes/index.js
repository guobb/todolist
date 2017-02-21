var express = require('express');
var router = express.Router();

const todoModel = require('../model/index');


router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/todos', function (req, res, next) {

    if (err) {
        res.send({code: 0, msg: '查询失败'});
    } else {
        todoModel.find({}, (err, todos) => {
            res.send(todos);
        })

    }
});


router.post('/todos', (req, res) => {
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


module.exports = router;
