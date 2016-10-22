var express = require('express');
var router = express.Router();

var Noticia = require('../models/noticias');

//rota especial
/*Noticia.route('titulo',{
  detail:true,
  handler:function(req,res,next){
    Noticia.findById(req.params.id,function(err,noticia){
      if(!err)
        res.json(noticia.titulo);
    });
  }
});*/

Noticia.methods(['get','put','post','delete']);
Noticia.register(router,'/noticiass');


module.exports = router;
