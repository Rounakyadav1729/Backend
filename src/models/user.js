const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {  
      schooName: {
    type: String
  },
  udise: {
    type: String
  },
  password: {
    type: String
  }
  
}, {
  collection: 'userdata',
  strict: false
});
      
module.exports = mongoose.model('userrr', userSchema);