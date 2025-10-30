export class StringCalculator {
  add(numbers: string): number {
    if (numbers === '') return 0;
    return numbers.split(/[,\n]/)
      .map(num => parseInt(num))
      .reduce((sum, num) => sum + num, 0);
  }
}