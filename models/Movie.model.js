const {Schema,model} = require('mongoose')
const movieSchema =new Schema({
   title:{type:String,required:true},
   genre:[String],
   plot:{type:String,required:true},
   cast:[{type: Schema.Types.ObjectId,ref:'Celebrity'}]
})
const Movie = model('Movie',movieSchema)

module.exports = Movie 