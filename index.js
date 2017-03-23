'use strict';

const nameit = require('./nameit');

exports.handler = (event, context, callback) => {
  let names = (event.names === undefined ? ['CFN'] : event.names.split(' '));
  let count = (event.count === undefined ? 1 : +event.count);
  let expanded = [];
  names.forEach((name) => {
    for (let i = 0; i < count; i ++) {
      expanded.push({
        name: name,
        meaning: nameit.nameIt(name)
      });
    }
  });
  callback(null, expanded);
};