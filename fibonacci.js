const fibs = function (n) {
  const sequence = [0, 1];
  if (n < 1) return;
  if (n === 1) return [0];
  for (let i = 0; i < n - 2; i++) {
    sequence.push(sequence[i] + sequence[i + 1]);
  }
  return sequence;
};

const fibsRec = function (n) {
  console.log("This was printed recursively");

  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];
  const fib = fibsRec(n - 1);
  const currentNum = fib.at(-1) + fib.at(-2);

  fib.push(currentNum);
  return fib;
};

console.log(fibsRec(8));
