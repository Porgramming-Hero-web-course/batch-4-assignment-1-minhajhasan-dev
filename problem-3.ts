// problem 3:

{
  function countWordOccurrences(sentence: string, word: string): number {
    const words = sentence.split(" ");
    let count = 0;
    for (const item of words) {
      if (item.toLowerCase() === word.toLowerCase()) {
        count++;
      }
    }
    console.log(count);
    return count;
  }

  countWordOccurrences(
    "I love typescript more Typescript and javascript typeScript",
    "typescript"
  );
}
