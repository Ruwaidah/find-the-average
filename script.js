function avg(array) {
  let sum = 0;
  for (let num of array) sum += num;
  return sum / array.length;
}

console.log(avg([12, 10]));
