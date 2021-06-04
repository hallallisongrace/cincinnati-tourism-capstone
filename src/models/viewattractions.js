const mongoose = require('mongoose');
const Schema = mongoose.Schema
const locationSchema = new Schema({
    address: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    zipcode: {
        type: String
    }
})

const attractionSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    imageURL: {
        type: String
    },
    website: {
        type: String
    },
    location: {
        type: locationSchema
    },
    indoors: {
        type: Boolean
    },
    childFriendly: {
        type: Boolean
    }
})

const Attraction = mongoose.model('Attraction', attractionSchema)
module.exports = Attraction