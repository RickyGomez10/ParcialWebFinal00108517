var express = require('express');
var router = express.Router();
var Medico = require('../models/medico');
var mongoose = require('mongoose');

/* GET home page. */
router.get('/', function(req, res, next) {
  
  Medico.find({},(err,result)=>{

    res.render('index',{title: 'Medicos', FilasBD: JSON.stringify(result)});
   
  });

});

router.post('/',(req,res,next)=>{
  const medico = new Medico({
    _id: mongoose.Types.ObjectId(),
    Nombre: req.body.Nombre,
    Especialidad: req.body.Especialidad,
    Anios: req.body.anios
});
medico.save().then(result =>{
  console.log(result);
  res.redirect('/api/Medicos');
}).catch(error =>{console.log(error)});
});

router.get('/eliminar/:valor',(req,res,next) =>{
  Medico.findByIdAndRemove({_id: mongoose.Types.ObjectId(req.params.valor)},(err,result)=>{
    if(result){
    res.redirect('/api/Medicos');
    }
    if(err){
      console.log(err);
    }
  });

});
router.post('/actualizar/:valor',(req,res,next)=>{
    
      Medico.findByIdAndUpdate({_id:mongoose.Types.ObjectId(req.params.valor)}, {Nombre: "ValorActualizado"},function(err,place){
        if(place){
          console.log("si se pudo");
          res.redirect('/api/Medicos');
        }
        if(err){
          console.log(err);
        }
      });
    
});
module.exports = router;
