var mainModel = require('../models/main');
var labelModel = require('../models/label');
var tagModel = require('../models/tag');
var Util = require('../util');

module.exports = () =>{

    return {
        addMain: async (main) => {
            var model = new mainModel();
            model.id = await mainModel.find().count() + 1;
            model.text = main.text;

            var tagList = [];
            var util = Util();
            const normalized = await util.normalized(main.text);
            const tags = await util.getTag(normalized);

            tags.forEach((element,index) => {
                if(element.text){
                    tagList.push({"id": index ,"text":element.text,"text_normalized": element.text_normalized});
                }
            });

            model.tags = tagList;

            var labelList = [];
            const labels = await util.getLabel(main.text);
            labels.forEach((element,index) => {
                if(element.text){
                    labelList.push({"id": index ,"text":element.text,"category": element.text_normalized});
                }
            });

            model.labels = labelList;

            return await model.save((error,doc)=>{
                if(error){
                    return error;
                }

                return doc;
            });
        },
        searchByLabel: async (label) => {
            return await mainModel.find({ "labels.text": label } ).then((result)=>{
                return result
            }).catch((error)=>{
                console.log(error);
            });
        },
        searchByLabelCategory: async (category) => {
            return await mainModel.find({ "labels.category": category }).then((result)=>{
                return result
            }).catch((error)=>{
                console.log(error);
            });
        },
        searchByTag: async (word) => {
            return await mainModel.find({ "tags.text_normalized": word.toUpperCase() }).then((result)=>{
                return result
            }).catch((error)=>{
                console.log(error);
            });
        }
    }
}
