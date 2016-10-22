var restful = require('node-restful');
var mongoose = restful.mongoose;

var noticiasSchema = new mongoose.Schema({
  titulo:String,
  descricao:String
});

module.exports = restful.model('Noticias',noticiasSchema);
