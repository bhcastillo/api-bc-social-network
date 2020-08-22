if (process.env.NODE_ENV === 'development') {
  require('dotenv').config();
  console.log('### Development mode ###');
}
import app from './app';
import { startConnection } from './database';
async function main() {
  startConnection();
  await app.listen(app.get('port'));
  console.log('server on port ', app.get('port'));
}
main();
