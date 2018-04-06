const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define list model
const listSchema = new Schema({
  item: String
});

// Create the model class
const ModelListClass = mongoose.model('user', listSchema);

// Export the model
module.exports = ModelListClass;
