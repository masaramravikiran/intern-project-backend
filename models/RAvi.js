const mongoose= require('mongoose')

const RaviSchema = new mongoose.Schema({

  name: {
    type: string,
    required: true

  },
  tech:{
    type : string,
    required: true

  },
  sub:{
    typr: Boolean,
    required: true,
    default : false
  }
})
module.exports = mongoose,model('Ravi',RaviSchema)