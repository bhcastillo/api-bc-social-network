import { connect } from 'mongoose';

export async function startConnection() {
  const URI ='mongodb://heroku_95zc76qr:59ferekk5hqo5klr0b01rvno0q@ds149329.mlab.com:49329/heroku_95zc76qr';
  await connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  });
  console.log('Database is conected');
}
