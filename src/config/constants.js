const dotenv = require('dotenv');

const { NODE_ENV } = process.env;

let dotenvFilePath = '.env';

if (NODE_ENV && NODE_ENV.toLowerCase() !== 'production') {
  dotenvFilePath += '.' + NODE_ENV.toLowerCase();
}

dotenv.config({
  path: dotenvFilePath,
});

module.exports = {
  NODE_ENV: process.env.NODE_ENV || 'development',
};
