/* 
In this challenge, you are required to calculate and print 
the sum of the elements in an array, keeping in mind that some of those 
integers may be quite large.
*/

function aVeryBigSum(ar: number[]): number {
    let dataOutput = 0;
    for(let i of ar) {
       dataOutput += i;
    }
    
    return dataOutput;
}