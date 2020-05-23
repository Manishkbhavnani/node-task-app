const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    age : {
        type : Number,
        required : true
    },
    level : {
        type : Number,
        required : true
    }
  
}, {
    collection: 'user',
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

module.exports = mongoose.model('user', UserSchema);