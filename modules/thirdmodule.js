var returnRandom = require('./returnrandom.js');
var convertDollar = require('./convert.js');

var Pretty = {
  foo: convertDollar.func(returnRandom.returnRand(100, 1000000)),
  poo: 'Account Balance: \n',
};

// module.exports = convertDollar(returnRandom.returnRand(100, 1000000));
// module.exports = 'Account Balance: \n';
module.exports = Pretty;
