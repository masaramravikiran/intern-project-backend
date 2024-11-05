const express = require('express')
const router =  express.Router()
const Ravi = require('../models/Ravi')

router.get('/',async(req,res) =>{
  try{
        const Ravi = await Ravi.find()
        res.json(Ravi)
  }catch(err){
    res.send('Error' + err)
  }
  
})

router.post('/',async(req,res){
  const Ravi = new Ravi({
    name: req.body.name,
    tech: req.body.tech,
    sub: req.body.sub

  })
  try{
      const a1 = await Ravi.save()
      res.json(a1)
  }catch(err){
    res.send('Error')
  }
})
module.exports = router