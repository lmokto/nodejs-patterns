const Logger = require('./class_pattern_1');

const log = new Logger(new Date());

log.info('This is Info');
log.warning('This is warning');

const loi = Logger(new Date());

loi.info('This is Info');
loi.warning('This is warning');
