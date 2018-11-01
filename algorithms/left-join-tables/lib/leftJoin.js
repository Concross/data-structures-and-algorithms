module.exports = (left, right) => {
  let result = {};

  for (let key in left) {
    result[key] = [left[key]];

    if (right[key]) {
      result[key].push(right[key]);
    } else {
      result[key].push(null);
    }
  }

  return result;
};
