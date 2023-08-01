const mongoose = require('mongoose');

const DayCategory_Schema = new mongoose.Schema({
    categoryName:{
        type:String,
        required: true,
    },
    categoryImage:{
        type:String,
        required: true,
    },
    Language:{
        type:String,
        required: true,
    }
})

const collection = 'daycategory';
module.exports = mongoose.model(collection, DayCategory_Schema);