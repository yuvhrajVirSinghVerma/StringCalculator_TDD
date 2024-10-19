export function calculator(numbers) {
  if (!numbers) return 0;
  let numArr = numbers.split(",");
  let sum = 0;
  numArr.map((num) => {
    sum += parseInt(num);
  });
  return sum
}
