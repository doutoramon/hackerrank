/* 
Complete the simpleArraySum function in the editor below. It must return the sum of the array elements as an integer.
simpleArraySum has the following parameter(s):
ar: an array of integers 
*/

function simpleArraySum(ar: number[]): number {
    let sum = 0;
    for (let i = 0; i < ar.length; i++) {
    sum += ar[i];
    }
    
    return sum
}