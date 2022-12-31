const Autocode = require('../src');
const logger = require('@mkhizeryounas/logger');

const autocode = new Autocode();

autocode.register(function onboardCompany(name, site, phone) {
  logger.debug('params::', name, site, phone);
  return { data: { name, site, phone } };
});

autocode.listen({ port: 3000 });
