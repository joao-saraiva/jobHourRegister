import mongoose from "mongoose";

mongoose.connect('mongodb+srv://joao:123@cluster0.3vx3q.mongodb.net/jobHour');

const db = mongoose.connection;

export default db