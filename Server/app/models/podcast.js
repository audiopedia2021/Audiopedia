const mongoose = require('mongoose')
const Schema = mongoose.Schema


const podcastSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    authorName: {
        type: String,

    },
    description: {
        type: String,

    },
    imgPath: {
        type: String,
        required: true
    },
    audioPath: {
        type: String,
        required: true
    },
    genere: [{
        type: String,
    }],
    subscriptionType: {
        type: String,
        enum: ['free', 'iconic', 'old', 'premium'],
        default: 'free'
    }

}, { timestamps: true })


module.exports = mongoose.model('podcast', podcastSchema)