const mongoose = require('mongoose')
const { Schema } = mongoose
const tradeSchema = new Schema({
  sender:{
    _user:{type:Schema.Types.ObjectId,ref:'User'},
    bookTitle:String

},
receiver:{
  _user:{type:Schema.Types.ObjectId,ref:'User'},
  bookTitle:String

},
status:String
})

mongoose.model('trades', tradeSchema)