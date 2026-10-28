export function rangeSum(start, end) {
  const min = Math.min(start, end);
  const max = Math.max(start, end);
  let sum = 0;

  for (let i = min; i <= max; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}

export function iterationCount(a) {
  let count = 0;
  let current = a;

  while (current > 0.1) {
    current = current / 2;
    count++;
  }
  
  return count;
}

export function symbolsReplace(message) {
  let result = '';
  let index = 0;

  if (message.length === 0) return message;

  do {
    if ((index + 1) % 3 === 0) {
      result += '_';
    } else {
      result += message[index];
    }
    index++;
  } while (index < message.length);

  return result;
}