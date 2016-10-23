var restful = require('node-restful');
var mongoose = restful.mongoose;

var raSchema = new mongoose.Schema({
  ra:String,
  datamatricula:String
});

var fisicoSchema = new mongoose.Schema({
  altura:Number,
  peso:Number
});

var noticiasSchema = new mongoose.Schema({
  titulo:String,
  descricao:String,
  detalhes:{type:mongoose.Schema.Types.ObjectId,ref:'RA'},
  corpo:{type:mongoose.Schema.Types.ObjectId,ref:'Fisico'}
});

module.exports.fisico = restful.model('Fisico',fisicoSchema);
module.exports.ra = restful.model('RA',raSchema);
module.exports.noticia = restful.model('Noticias',noticiasSchema);
