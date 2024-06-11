import * as dotenv from 'dotenv';
import * as path from 'path';
import * as fs from 'fs';

async function globalSetup() {
  dotenv.config(); // reads the .env file and expose env vars in it if they are not already defined
  const configPath = path.resolve(__dirname, `../envConfigs/${process.env.ENVIRONMENT_NAME}.json`);

  if (!fs.existsSync(configPath)) {
    throw Error(`No such config: '${configPath}' was found`);
  }

  const envConfig = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
  process.env.URL = envConfig.Url;
  process.env.USER = envConfig.User;
  process.env.PASSWORD = envConfig.Password;
  process.env.PIN = envConfig.Pin;

  // here you can run a global login and store the cookies and re-use them
  // in all the test except the one the specifically test login/logout
  // to speed up the test execution.
}

export default globalSetup;