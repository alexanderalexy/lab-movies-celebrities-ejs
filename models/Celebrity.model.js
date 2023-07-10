//  Add your code here

const {Schema, model} = require('mongoose');


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
    

})

const CelebrityModel = model('celebrity', celebritySchema)
model.export = CelebrityModel;