import mongoose from "mongoose";

const mongoUri = process.env.MONGO_CONNECTION_URL;

export async function runDb() {
    try {
        await mongoose.connect(mongoUri);
        console.log("Connected successfully to mongo server");
    } catch {
        console.log("Connection is wrong");
        await mongoose.disconnect();
    }
}
