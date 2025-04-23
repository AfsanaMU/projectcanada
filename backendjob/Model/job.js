var mongoose = require("mongoose");
var jobSchema = new mongoose.Schema({
    jobid: {
        type: String,
        
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true,
        maxlength: 52,
    },
    company: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: String,
        required: true,
        unique: true
    },
    location: {
        type: String,
        required: true
    },
     salary: {
         type: String,
         required: true,
         unique: true
     },

})
module.exports = mongoose.model("jobs", jobSchema);
