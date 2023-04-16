/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	let len = s.length;

	if (len === 0 || len === 1) return len;

	let result = 0;
	for (let i = 0; i < len; i++) {
		let subStr = "";
		for (let j = i; j <= len; j++) {
			if (subStr.includes(s[j]) || s[j] === undefined) {
				result = subStr.length > result ? subStr.length : result;
				break;
			}
			subStr += s[j];
		}
	}
	return result;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring(""));
console.log(lengthOfLongestSubstring(" "));
console.log(lengthOfLongestSubstring("au"));
