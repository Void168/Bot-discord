const mongoose = require('mongoose')

const mongoPath = 'mongodb+srv://mrhladykillah:Hung12345?@cluster0.wuclx.mongodb.net/?retryWrites=true&w=majority'

module.exports = async () =>
{
    await mongoose.connect(mongoPath, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    return mongoose
}