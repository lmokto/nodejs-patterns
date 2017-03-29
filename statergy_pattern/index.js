const Manifester = require('./statergy_pattern_real_time');
const statergies = require('./statergies');

const jsonConfig = new Manifester(statergies.json);

jsonConfig.read('samples/conf.json');
jsonConfig.set('book.nodejs', 'design pattern');
jsonConfig.save('samples/conf.json');

const iniConfig = new Manifester(statergies.ini);

iniConfig.read('samples/conf.ini');
iniConfig.set('book.nodejs', 'design pattern');
iniConfig.save('samples/conf.ini');
