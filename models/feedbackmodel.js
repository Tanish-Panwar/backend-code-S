const mongoose = require('mongoose');

const Feedbacks = mongoose.model('Sample', {
    eventname: {type: String},
    educatorname: {type: String},
    eventque: [ {eventrange: String, knowledge: String, exp: String, futureimv: String, futurethings: String, organized: String, recommendev: String}],
    educatorque: [{educatorrange: String, knowledgeofed: String, teaching: String, futureimvofed: String, organizeded: String, futuretopics: String, recommended: String}]
});


module.exports = {Feedbacks};