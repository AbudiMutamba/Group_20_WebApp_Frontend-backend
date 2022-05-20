const mongoose = require('mongoose')

const formSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: [true, 'Accept the terms']
    },
    jobType: {
        type: String,
    },
    acceptedTerms: {
        type: Boolean,
        required: [true, 'Accept the terms']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
    
});

module.exports = mongoose.model('form', formSchema);