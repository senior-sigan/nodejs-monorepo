const _ = require('lodash');

function makeCoffee() {
  const arr = [1, 2, 3];
  return _.fill(arr, 'coffee');
}

module.exports = {
  makeCoffee,
};
