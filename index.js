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
  numArr.map((num) => {
    sum += parseInt(num);
  });
  return sum;
}
