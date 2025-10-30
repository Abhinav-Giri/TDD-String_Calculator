export class StringCalculator {
  add(numbers: string): number {
    if (numbers === '') return 0;

    let delimiter = ',';
    let numbersToProcess = numbers;

    if (numbers.startsWith('//')) {
      delimiter = numbers[2];
      numbersToProcess = numbers.substring(4);
        
    }
const nums = numbersToProcess
      .split(new RegExp(`[${delimiter}\\n]`))
      .map(num => parseInt(num));
      
   const negatives = nums.filter(n => n < 0);
    if (negatives.length > 0) {
      throw new Error(`Negatives not allowed: ${negatives.join(',')}`);
    }

    return nums.reduce((sum, num) => sum + num, 0);
  }
}