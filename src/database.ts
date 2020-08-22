import { connect } from 'mongoose';

export async function startConnection() {
  const URI =process.env.MONGODB_URI
  await connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  });
  console.log('Database is conected');
}
