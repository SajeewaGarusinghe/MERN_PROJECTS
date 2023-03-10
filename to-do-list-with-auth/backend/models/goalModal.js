const mongoose = require('mongoose');

const goalSchema = mongoose.Schema(
  {
    user:{
      type:mongoose.Schema.Types.ObjectId,
      required:true,
      ref:'User'

    },
    text: {
      type: String,
      required: [true, 'please enter a text value'],
    },
  },
  {
    timestamps: true, //to create updated and created at field automatically
  }
);

module.exports = mongoose.model('Goal', goalSchema);
