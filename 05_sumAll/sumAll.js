const sumAll = function (n, end) {
  if (n < 0 || end < 0) return "ERROR";
  if (!Number.isInteger(n) || !Number.isInteger(end)) return "ERROR";
  if (n > end) {
    let temp = n;
    n = end;
    end = temp;
  }
  for (sum = 0; n < end + 1; n++) {
    sum += n;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
