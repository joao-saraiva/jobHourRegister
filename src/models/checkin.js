import mongoose from "mongoose";

const checkinSchema = new mongoose.Schema(
    {
        id: {type: String},
        date: {type: Date, required: true},
        employer: {type: mongoose.Schema.Types.ObjectId, ref: 'employer', required: true },
        type: {type: String, enum: ['startDay', 'endDay'], default: 'startDay', required: true},
    }
)

const checkin = mongoose.model('checkin', checkinSchema);

export default checkin;


