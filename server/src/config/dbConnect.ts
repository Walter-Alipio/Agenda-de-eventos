import 'dotenv/config'
import mongoose from 'mongoose'

const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@${dbHost}`);

const db = mongoose.connection;

export default db;