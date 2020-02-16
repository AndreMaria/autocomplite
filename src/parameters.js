var item = () =>{
    this.text = null;
    this.text_normalized = null;
}
 module.exports = () =>{
     return {
         newItem: () =>{
             return new item();
         }
     }
 }