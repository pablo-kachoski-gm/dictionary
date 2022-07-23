import { addIntoMap } from "./utils";

export function sortInNewAlphabet(unSortedWords: Array<string>, newAlphabet: string): string[] {
  if (!newAlphabet) return;
  if (!unSortedWords || unSortedWords.length === 1) return unSortedWords;
  const remainingWordMap = new Map();
  const finishedWordMap = new Map();
  //split the words when they need recursive treatment
  for (let i = 0; i < unSortedWords.length; i++) {
    const word = unSortedWords[i]
    if (!word) continue;

    const wordArray = word.split("")
    const initialLetter = wordArray.shift()
    const needsFurtherEval = wordArray.length !== 0
    if (needsFurtherEval) {
      const wordRest = wordArray.join("");
      addIntoMap(remainingWordMap, initialLetter, wordRest)
    } else {
      addIntoMap(finishedWordMap, initialLetter, initialLetter)
    }
  };

  const result = []
  const newAlphabetArray = newAlphabet.split("")
  for (let i = 0; i < newAlphabetArray.length; i++) {
    const letter = newAlphabetArray[i]
    const letters = finishedWordMap.get(letter)
    letters?.forEach(item => {
      result.push([item].join(""))
    });
    const complexWords = remainingWordMap.get(letter)
    const sortedComplex = sortInNewAlphabet(complexWords, newAlphabet)
    sortedComplex?.forEach(item => {
      result.push([letter, item].join(""))
    });
  };

  return result
}
