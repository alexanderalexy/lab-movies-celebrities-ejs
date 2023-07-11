//  Add your code here

const { Schema, model } = require('mongoose')


const celebritySchema = new Schema({
   name: {
    type: String,
    trim: true,
    required: true,
   },
   occupation: {
    type: String,
    required: true,
   },
   catch: {
    type: String,
    required: true,
   } 
    

})// Celebrity is the name of the collection in mongodb
const Celebrity = model('Celebrity', celebritySchema)
module.exports = Celebrity;