var moongoose = require('mongoose');

var labelModel = require('../models/label');
var tagModel = require('../models/tag');

var Schema = moongoose.Schema;

var mainModelSchema = new Schema({
    id: Number,
    text: {type: String, required: true, maxlength:2500 },
    labels: [labelModel],
    tags: [tagModel]
});

module.exports = moongoose.model('Main',mainModelSchema);