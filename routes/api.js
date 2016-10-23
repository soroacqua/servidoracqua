var express = require('express');
var router = express.Router();

var noticias = require('../models/noticias');
var Noticia = noticias.noticia;
var Ra = noticias.ra;
var Fis = noticias.fisico;
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
Noticia.register(router,'/noticias');
Ra.methods(['get','put','post','delete']);
Ra.register(router,'/ra');
Fis.methods(['get','put','post','delete']);
Fis.register(router,'/fisico');

module.exports = router;
