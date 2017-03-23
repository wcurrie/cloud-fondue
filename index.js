'use strict';

const nameit = require('./nameit');

exports.handler = (event, context, callback) => {
  console.log("Received", event);
  let names = (!event.queryStringParameters || event.queryStringParameters.names === undefined ? ['CFN'] : event.queryStringParameters.names.split(' '));
  let count = (!event.queryStringParameters || event.queryStringParameters.count === undefined ? 1 : +event.queryStringParameters.count);
  let expanded = [];
  names.forEach((name) => {
    for (let i = 0; i < count; i ++) {
      expanded.push({
        name: name,
        meaning: nameit.nameIt(name)
      });
    }
  });
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(expanded),
    headers: { 'Content-Type': 'application/json' }
  });
};