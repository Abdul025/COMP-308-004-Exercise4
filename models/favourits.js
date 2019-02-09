let mongoose = require('mongoose');

//create a model class
let favouritSchema = mongoose.Schema({
    firstName: String,
    lastname: String,
    favouritColor: String,
    favouritFruit: String       
    },

    {
        collection:"second"
    });

module.exports=mongoose.model('favourit', favouritSchema);