// Given a sentence, your functions should return the number of words in the sentence.
// Example:
// Input: noOfWords(We are neoGrammers) ––> Output: 3

const noOfWords = (sentense) => {
    const words = sentense.split(' ');
    return words.length;
}

console.log(noOfWords('We are neoGrammers'))