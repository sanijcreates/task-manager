const mongoose = require('mongoose')

//parameters are passed to remove depreciating errors. 
const connectDB = (url) => {
    return mongoose.connect(url,{
        useNewUrlParser: true,
       useCreateIndex: true,
       useFindAndModify: false,
       useUnifiedTopology: true,
   })
}
module.exports = connectDB