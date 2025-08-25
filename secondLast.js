function secondLast(arr) {
    const sorted = arr.sort((a, b) => b - a)
  const unique = [...new Set(sorted)];
  return unique[1];
}
console.log(secondLast([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));