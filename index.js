// Write your solution in this file!
let driver = {};

function updateDriverWithKeyAndValue(x, key, value) {
  let newob = {...x}
  newob[key] = value;
  return newob;
}
