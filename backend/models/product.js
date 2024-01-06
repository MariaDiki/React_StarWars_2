const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter product name'],
        trim: true,
        maxLength: [100, 'Product name cannot exceed 100 characters']

    },
    price: {
        type: Number,
        required: [true, 'Please enter product price'],
        maxLength: [5, 'Product price cannot exceed 5 characters'],
        default: 0.0

    },
    desription: {
        type: String,
        required: [true, 'Please enter product description'],
    },
    rating: {
        type: Number,
        default: 0
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            },
        }
    ],
    category: {
        type: String,
        required: [true, 'Please select category for this product'],
        enum: {
            values: [
                'Wear',
                'Home',
                'Office',
                'Accessories',
                'Gadgets',
                'Car',
                'Kitchen'
            ],
            message: 'Please select correct category for product'
        }
    },

    seller: {
        type: String,
        required: [true, 'Please enter product seller']
    },
    Stock: {
        type: String,
        required: [true, 'Please enter product stock'],
        maxLength: [5, ' product stock cannot exceed 5 characters'],
        default: 0
    },
    numOfReview: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            user: {
                type: mongoose.Schema.ObjectId,
                ref: 'User',
                required: true
            },
            name: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type:String,
                required: true

            }
        }
    ],
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    }


})

module.exports = mongoose.model('Products', productSchema);