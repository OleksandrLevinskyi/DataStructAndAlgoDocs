// Time: O(n*m) - loop over each character in each sentence
// Space: O(1)
const mostWordsFound = (sentences) => {
    let maxWordCount = 0;

    for (let sentence of sentences) {
        let wordCount = 1;
        for (let char of sentence) {
            if (char === ' ') {
                wordCount++;
            }
        }
        if (wordCount > maxWordCount) {
            maxWordCount = wordCount;
        }
    }

    return maxWordCount;
}