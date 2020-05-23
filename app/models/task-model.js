const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({

    task_name: {
        type: String,
        required: true
    },
    task_description: {
        type: String,
        required: false
    },
    task_status: {
        type: String,
        required: false,
        default : 'scheduled'
    },
    from : {
        type : Date,
        required: true,
    },
    to : {
        type : Date,
        required: true,
    }
  
}, {
    collection: 'task',
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

module.exports = mongoose.model('task', TaskSchema);