import mongoose from "mongoose";

const employerSchema = new mongoose.Schema(
  {
    id: {type: String},
    person: {type: mongoose.Schema.Types.ObjectId, ref: 'person', required: true},
    company: {type: mongoose.Schema.Types.ObjectId, ref: 'company', required: true},
    office: {type: String},
    perHourPayment: {type: Number, required: true}
  }
)

const employer = mongoose.model('Employee', employerSchema);

export default employer;