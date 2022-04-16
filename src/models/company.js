import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
  {
    id: {type: String},
    name: {type: String, required: true},
    owner: {type: mongoose.Schema.Types.ObjectId, ref: 'person', required: true}
  }
)

const company = mongoose.model('company', companySchema);

export default company;