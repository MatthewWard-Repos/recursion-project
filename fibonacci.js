const fibs = function (n) {
  const sequence = [0, 1];
  if (n < 1) return;
  if (n === 1) return [0];
  for (let i = 0; i < n - 2; i++) {
    sequence.push(sequence[i] + sequence[i + 1]);
  }
  return sequence;
};

console.log(fibs(1));
console.log(fibs(2));
console.log(fibs(3));
console.log(fibs(4));
console.log(fibs(5));
console.log(fibs(6));
console.log(fibs(7));
console.log(fibs(8));
const fibsRec = function () {};
