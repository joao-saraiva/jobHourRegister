import mongoose from "mongoose";

const personSchema = new mongoose.Schema(
  {
    id: {type: String},
    name: {type: String},
    birthDate: {type: Date, required: true},
  }
)

const person = mongoose.model('Person', personSchema)

export default person;