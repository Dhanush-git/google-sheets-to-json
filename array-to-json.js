const camelCase = require('to-camel-case');

function arrayToJSON(inputArray) {
  const jsonArray = [];
  const headers = inputArray[0].map(header => camelCase(header));

  for (let i = 1; i < inputArray.length; i++) {
    const obj = {};
    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = inputArray[i][j] || '';
    }
    jsonArray.push(obj);
  }

  return jsonArray;
}

module.exports = arrayToJSON