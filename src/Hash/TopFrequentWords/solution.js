// link: https://leetcode.com/problems/top-k-frequent-words/description/

var topKFrequent = function (words, k) {
  // map to store word frequencies
  const map = {};
  // add each word into the map, storing its frequency
  for (let i = 0; i < words.length; i++) {
    map[words[i]] = map[words[i]] + 1 || 1;
  }

  // create an array that sorts the entries of the map object from the highest frequency to lowest
  // if the frequencies are the same, then we need to sort by lexicographical order
  let res = Object.entries(map)
    .sort((a, b) => {
      return b[1] !== a[1] ? b[1] - a[1] : a[0].localeCompare(b[0]);
    }) // map the array to only contain the first element, aka just the word
    .map((x) => x[0]);

  // slice the array to return only the top k most frequent elements
  return res.slice(0, k);
};
