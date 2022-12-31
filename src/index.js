const expressLogger = require('morgan');
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const logger = require('./libs/logger');
const parser = require('./libs/parser');

class Autocode {
  constructor() {
    this.app = express();
    this.app.use(expressLogger('dev'));
    this.app.use(express.json());
    this.app.use(cookieParser());
    this.app.use(cors());

    logger.debug('👾', 'New instance generated');
  }

  /**
   * register a route to serve
   * @param {Function} fn
   */
  register(fn) {
    const { path, handler } = parser(fn);

    logger.debug('register::', { path, handler });

    this.app.use(path, handler);
  }
  /**
   * Start the server
   * @param {Object} options
   */
  listen({ port = 3000 }) {
    this.app.listen(port, () => logger.info('🚀', 'Listening on port::', port));
  }
}

module.exports = Autocode;
