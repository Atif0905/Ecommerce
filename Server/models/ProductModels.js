const mongoose = require("mongoose");


const productSchema = mongoose.Schema({
    name:{
        type:String,
        require:[true, "Please enter Product name"],
        trim:true
    },
    Description:{
        type:String,
        require:[true, "Please enter Product Description"]
    },
    Price:{
        type:Number,
        require:[true, "Please enter Product Price"],
        maxLength:[9,"Price cannot exceed 8 caractors"]
    },
    Rating:{
        type:Number,
        default:0
    },
    Images:[{
        public_id:{
            type:String,
            require:true
        },
        url:{
            type:String,
            require:true
        }
    }],
    category:{
     type:String,
     require:[true, "please enter category"]
    },
    Stock:{
        type:Number,
        require:[true, "please enter Stock"],
        maxLength:[4,"stock cannot exceed more then 4 "],
        default:1
       },
       numofReview:{
        type:Number,
        default:0
       },
       reviews:[
        {
            name:{
                type:String,
                require:true,
            },
            Rating:{
                type:Number,
                require:true,
            },
            Comments:{
                type:String,
                require:true
            }
        }
       ],

       createdAT:{
         type:Date,
         default:Date.now
       }

})

module.exports = mongoose.model("Product", productSchema)