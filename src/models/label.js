var moongoose = require('mongoose');

var Schema = moongoose.Schema;

var labelModelSchema = new Schema({
    id :Number,
    text: { type: String, required: true, maxlength: 500}, 
    category: { type: String, required: true, maxlength: 200}, 
});

module.exports = labelModelSchema;