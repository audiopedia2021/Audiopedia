const mongoose = require('mongoose')
const Schema = mongoose.Schema


const userSchema = new Schema({

    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mobileNo: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    subscriptionType: {
        iconic: {
            type: Boolean,
            default: false
        },
        gold: {
            type: Boolean,
            default: false
        },
        premium: {
            type: Boolean,
            default: false
        }
    },
    subscriptionPeriod: {
        type: Date
    },
    bookmark: [{
        type: Schema.Types.ObjectId,
        ref: 'audiobook' || 'podcast' || 'story'
    }],
    isEnable: {
        type: Boolean,
        default: false
    },

}, { timestamps: true })


module.exports = mongoose.model('user', userSchema)