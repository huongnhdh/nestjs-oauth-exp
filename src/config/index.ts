// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

type Config = {
  host: string;
  port: number;
  google: {
    appId: string;
    appSecret: string;
  };
};

const config: Config = {
  host: 'localhost',
  port: 8080,
  google: {
    appId: process.env.APP_GOOGLE_APP_ID,
    appSecret: process.env.APP_GOOGLE_APP_SECRET,
  },
};

export default config;
