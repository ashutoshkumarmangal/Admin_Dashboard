const mongoose = require('mongoose');

const Exercise_Schema = new mongoose.Schema({
    ExerciseName:{
        type:String,
        required: true,
    },
    ExerciseDescription:{
        type:String,
        // required: true,
    },
    ExerciseLanguage:{
        type:String,
        required: true,
    },
    Tag:{
        type:String,
        // required: true,
    }
})

const collection = 'Exercises';
module.exports = mongoose.model(collection, Exercise_Schema);