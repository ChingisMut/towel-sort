
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let m = [];
  if(matrix == null) {
    return m;
  }
  for (let i = 0; i < matrix.length; i++) {
    if(i % 2 == 0) {
      m.push(...matrix[i]);
    } else {
      m.push(...matrix[i].reverse());
    }
  }
  return m;
}
