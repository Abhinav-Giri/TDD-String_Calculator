export class StringCalculator {
  add(numbers: string): number {
    if (numbers === '') return 0;

    let delimiter = ',';
    let numbersToProcess = numbers;

    if (numbers.startsWith('//')) {
      delimiter = numbers[2];
      numbersToProcess = numbers.substring(4);
      return numbersToProcess
        .split(delimiter)
        .map(num => parseInt(num))
        .reduce((sum, num) => sum + num, 0);
    }

    return numbersToProcess.split(/[,\n]/)
      .map(num => parseInt(num))
      .reduce((sum, num) => sum + num, 0);
  }
}