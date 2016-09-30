/**
 * Created by krzysztof on 30.09.16.
 */
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/auth');

module.exports = mongoose