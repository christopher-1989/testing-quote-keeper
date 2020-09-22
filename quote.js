// models/quote.js
  
const {mongoose} = require('../database.js');
const Schema = mongoose.Schema;

const QuoteSchema = new Schema(
  {
    quote: String,
    attributed: String,
    source: String
  }
);

const Quote = mongoose.model('Quote', QuoteSchema);
module.exports = Quote;

/*
const DinosaurSchema = new Schema(
  {
    name: {type: String, required: true},
    count: {
      type: Number,
      max: [10, 'Cannot hold more than 10 dinosaurs.']
    },
    risk: {type: String}
  }
);
*/