const { EnvironmentPlugin } = require('webpack');
require('dotenv').config();

module.exports = {
  plugins: [
    new EnvironmentPlugin([
      'MON_API_STARWARS'
    ])
  ]
};
