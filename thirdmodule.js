var Random = require('./random.js');
var Convert = require('./convert.js');

var Balance = {
  money: Convert.func(Random.func(100, 1000000)),
  words: 'Account Balance: \n',
};

// module.exports = convertDollar(returnRandom.returnRand(100, 1000000));
// module.exports = 'Account Balance: \n';
module.exports = Balance;
