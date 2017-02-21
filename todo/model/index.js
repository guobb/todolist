/**
 * Created by apple on 17/2/21.
 */
const mongoose = require('mongoose');

mongoose.connect('127.0.0.1:12345/node');

// 定义一个模型并导出
module.exports = mongoose.model('todo',mongoose.Schema({
    text: String
}));