const mongoose = require('mongoose');
const { default: Viewattra } = require('../Viewattra');
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
})

const Attraction = mongoose.model('Attraction', attractionSchema)
module.exports = Viewattra