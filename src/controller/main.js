var mainService = require('../service/service');
var Util = require('../util');

module.exports = (app) =>{

    app.get('/search/:word',async (req,res,next)=>{
        var word = req.params['word'];
        var service = mainService();
        return await service.searchByTag(word).then((result)=>{
            if(result){
                return res.status(200).send({ status: "ok", "result": result}); 
            }else {
                return res.status(401).send({status: "not found"});
            }
        }).catch((error)=>{
            return res.status(401).send({status: "error in search return"});
        });
    });

    app.get('/search/label/:label',async (req,res,next)=>{
        var label = req.params['label'];
        var service = mainService();
        return await service.searchByLabel(label).then((result)=>{
            if(result){
                return res.status(200).send({ status: "ok", "result": result}); 
            }else {
                return res.status(401).send({status: "not found"});
            }
        }).catch((error)=>{
            return res.status(401).send({status: "error in search return"});
        });
    });

    app.get('/search/label/category/:category', async (req,res,next)=>{
        var category = req.params['category'];
        var service = mainService();
        return await service.searchByLabelCategory(category).then((result)=>{
            if(result){
                return res.status(200).send({ status: "ok", "result": result}); 
            }else {
                return res.status(401).send({status: "not found"});
            }
        }).catch((error)=>{
            return res.status(401).send({status: "error in search return"});
        });
    });

    app.get('/Normalized/:frase',async (req,res,next)=>{
        var frase = req.params['frase'];
        var util = Util();
        const normalized = await util.normalized(frase);
        const list = await util.getTag(normalized);
        if(list){
            return res.status(200).send({ status: "ok", "result": list}); 
        }else {
            return res.status(401).send({status: "not found"});
        }
    })

    app.post('/main/add', async (req,res,next)=>{
        var itens = req.body;
        if(!itens){
            return res.status(401).send({auth:false});
        } else {
            var service = mainService();
            return await service.addMain(itens).then((result)=>{
                if(result){
                    return res.status(200).send({ status: "ok", "result": result}); 
                }else {
                    return res.status(401).send({status: "not found"});
                }
            }).catch((error)=>{
                return res.status(401).send({status: "error in insert document"});
            });
        }
    })
}