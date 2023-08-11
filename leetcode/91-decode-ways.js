// Bottom-up/tabulation approach:
// TIME: O(n)
// SPACE: O(n)
const numDecodings = (s) => {
  const cache = Array(s.length + 1).fill(0);
  cache[s.length] = 1;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] != 0) {
      cache[i] = cache[i + 1];

      if (
        i + 1 < s.length &&
        (
          s[i] == 1 ||
          (s[i] == 2 && s[i + 1] < 7)
        )
      ) {
        cache[i] += cache[i + 2];
      }
    }
  }

  return cache[0];
}

// Optimized bottom-up/tabulation approach:
// TIME: O(n)
// SPACE: O(1)
// const numDecodings = (s) => {
//   let cache0 = 0;
//   let cache1 = 1;
//   let cache2 = 0;

//   for (let i = s.length - 1; i >= 0; i--) {
//     cache0 = s[i] == 0 ? 0 : cache1;

//     if (
//       i + 1 < s.length &&
//       (
//         s[i] == 1 ||
//         (s[i] == 2 && s[i + 1] < 7)
//       )
//     ) {
//       cache0 += cache2;
//     }

//     cache2 = cache1;
//     cache1 = cache0;
//   }

//   return cache1;
// }

// Top-down/memoization approach:
// TIME: O(n)
// SPACE: O(n)
// const numDecodings = (s) => {
//   const cache = {[s.length]: 1};

//   return helper(s, cache, 0);
// }

// const helper = (s, cache, startIdx) => {
//   if (s[startIdx] == 0) {
//     return 0;
//   }

//   if (cache[startIdx]) {
//     return cache[startIdx];
//   }

//   let result = helper(s, cache, startIdx + 1); // 1 char path

//   if (
//     startIdx + 1 < s.length && 
//     (
//       s[startIdx] == 1 || 
//       (s[startIdx] == 2 && s[startIdx + 1] < 7)
//     )
//   ) {
//     result += helper(s, cache, startIdx + 2); // 2 char path
//   }

//   cache[startIdx] = result;

//   return result;
// }
