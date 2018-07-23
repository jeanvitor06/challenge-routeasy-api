const Promise = require('bluebird');
const mongoose = require('mongoose');
mongoose.Promise = Promise;

const deliverySchema = new mongoose.Schema({
  name: String,
  weight: Number,
  addressName: String,
  addressNumber: Number,
  addressDistrict: String,
  addressComplement: String,
  city: String,
  state: String,
  country: String,
  geolocationLatitude: String,
  geolocationLongitude: String,
  inserted: { type: Date, default: Date.now },
  lastUpdate: { type: Date, default: Date.now },
});