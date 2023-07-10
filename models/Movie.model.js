
const { Schema, model } = require('mongoose')
const Schema =  mongoose.Schema;

const movieSchema = new Schema({
   title: {
    type: String,
    required: true,
   },
   genre: {
    type: String,
    required: true,
   },
   plot: {
    type: String,
    required: true,
   },
   cast: {
    type: [{ type: Schema.Types.ObjectId, ref: 'Celebrity'}],
   },
    

})

const Movie = model('Movie', movieSchema)
module.exports = Celebrity;