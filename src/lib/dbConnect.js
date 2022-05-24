import mongoose from "mongoose";

const MONGO_USER = process.env.MONGO_USER;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const MONGO_DB = process.env.MONGO_DB;

if (!MONGO_USER || !MONGO_PASSWORD || !MONGO_DB) {
  throw new Error(
    "Please ensure  you define MONGODB_USER, MONGO_PASSWORD and MONGO_DB environment variable inside .env.local"
  );
}

// const MONGODB_URI = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@cluster0.zc4np.mongodb.net/${MONGO_DB}?retryWrites=true&w=majority`;
const MONGODB_URI = `mongodb+srv://admin:ZmLNglOVPL5S321v@cluster0.sk7hl1g.mongodb.net/rptgen_app?retryWrites=true&w=majority`;
// const MONGODB_URI = `mongodb+srv://admin:ZmLNglOVPL5S321v@cluster0.sk7hl1g.mongodb.net/?retryWrites=true&w=majority`;

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      // bufferCommands: false,
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
