let mongoose = require('mongoose');

//create a model class
let myFavouritSchema = mongoose.Schema({
    FirstName: String,
    LastName:String,
    FavouritColor:String,
    FavouritFruit:String       
    },

    {
        collection:"myFavourit"
    });

module.exports=mongoose.model('favourit', myFavouritSchema);