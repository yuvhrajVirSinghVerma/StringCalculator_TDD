export function calculator(numbers) {
  if (!numbers) return 0;

  let delimiter = ",";
  if (numbers.startsWith("//")) {
    let splits = numbers.split("\n");
    delimiter = splits[0].substring(2);
    numbers = splits[1];
  }
  let numArr = numbers.split(new RegExp(`[${delimiter}\n]`));
  let sum = 0;
  let negativeNums = [];
  numArr.map((num) => {
    if (num < 0) negativeNums.push(num);
    sum += parseInt(num);
  });
  if (negativeNums.length > 0) {
    throw new Error(`negative numbers not allowed ${negativeNums.join(", ")}`);
  }
  return sum;
}
