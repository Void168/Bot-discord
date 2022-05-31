import mongoose from 'mongoose';

const scheduledSchema = new mongoose.Schema({
    date: {
        type: Date, 
        required: true        
    },
    content: reqString,
    guildId: reqString,
    channelId: reqString
})

const name = mongoose.model('scheduled-posts', scheduledSchema)

export default name