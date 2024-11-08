// problem 2

{
  function removeDuplicates(arr: number[]): number[] {
    const uniqueArray: number[] = [];
    for (const item of arr) {
      if (!uniqueArray.includes(item)) {
        uniqueArray.push(item);
      }
    }
    console.log(uniqueArray);
    return uniqueArray;
  }

  removeDuplicates([1, 2, 2, 3, 3, 4, 4, 5]);
}
