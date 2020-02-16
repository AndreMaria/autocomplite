var moongoose = require('mongoose');

var Schema = moongoose.Schema;

var tagModelSchema = new Schema({
    id : Number,
    text: { type: String, required: true, maxlength: 200},
    text_normalized: { type: String, required: true, maxlength: 200}
});

module.exports = tagModelSchema;