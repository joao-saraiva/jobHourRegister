import mongoose from "mongoose";
import companyObject from "./company.js";

const employerSchema = new mongoose.Schema(
  {
    id: {
      type: String
    },
    person: {
      type: mongoose.Schema.Types.ObjectId, ref: 'person', required: true, unique: true,
      validate: {
        validator: async (person) => {
          const personCompanies = await companyObject.find({'owner': person}).lean();
          const personHasCompanies = personCompanies.length > 0;
          return !personHasCompanies;
        },
        message: 'Owner cant be an Employer'
      }
    },
    company: {
      type: mongoose.Schema.Types.ObjectId, ref: 'company', required: true
    },
    office: {
      type: String, required: true
    },
    perHourPayment: {
      type: Number, required: true, min: 1
    }
  }
)

const employer = mongoose.model('Employee', employerSchema);

export default employer;