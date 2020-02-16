var Parameters = require('./parameters')

module.exports = () =>{
    return {
        normalized : async (text) =>{
            const a = 'àáäâãèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·/_,:;'
            const b = 'aaaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh------'
            const p = new RegExp(a.split('').join('|'), 'g')
            return text.toString().toLowerCase().trim()
              .replace(p, c => b.charAt(a.indexOf(c))) // Replace special chars
              .replace(/&/g, '-and-') // Replace & with 'and'
              .replace(/[\s\W-]+/g, ' ') // Replace spaces, non-word characters and dashes with a single dash (-)
        },
        getTag : async (text) =>{
            var list = text.split(' ');
            if(list && list.length > 0){
                var listTag = [];
                list.forEach(element => {
                    var parameter = Parameters();
                    parameter.text = element;
                    parameter.text_normalized = element.toUpperCase();

                    listTag.push(parameter);
                });
                return listTag;
            } else {
                return null;
            }
        },
        getLabel : async (text) =>{
            var list = text.split(',');
            if(list && list.length > 0){
                var listLabel = [];
                list.forEach(element => {
                    var parameter = Parameters();
                    parameter.text = element;
                    parameter.text_normalized = element.toUpperCase();

                    listLabel.push(parameter);
                });
                return listLabel;
            } else {
                return null;
            }
        }
    }
}