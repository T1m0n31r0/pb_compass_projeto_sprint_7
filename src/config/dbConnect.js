import mongoose from "mongoose"

mongoose.connect("mongodb+srv://margaridaerickson:Erick*229@cluster0.ol0rk6e.mongodb.net/user-registration");

let db = mongoose.connection;

export default db;