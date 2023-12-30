import mongoose from 'mongoose';
const MONGODB_

let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatbase =async () => {
    if (cached.conn) return cached.conn;
    
}