//#region EASY
//#region ex_1
//1. TWO SUM
/**
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 */
var arrNums = [1, 2, 3, 4, 5, 6];
let twoSum = (arrayNums, target) => {
  const hashMap = {};
  for (let i = 0; i < arrayNums.length; i++) {
    const num = arrNums[i];
    console.log(num, hashMap);
    if (hashMap[target - num] !== undefined) {
      return [i, hashMap[target - num]];
    }
    hashMap[num] = i;
  }
};
// console.log(twoSum(arrNums, 10));
//#endregion ex_1
//#region ex_9
//9. PALINDROME NUMBER
let isPalindromeNumber = (number) => {
  if (number <= 0 || typeof number !== "number") {
    return undefined;
  }
  let numArr = Array.from(String(number), Number);
  let numArrTemp = [...numArr].reverse();
  let result = true;
  numArr.forEach((num, index) => {
    if (num !== numArrTemp[index]) {
      result = false;
    }
  });
  return result;
};
// console.log(isPalindromeNumber(123321));
//#endregion ex_9
//#region ex_13
// 13. ROMAN TO INTEGER
/**
 * Input: s = "III"
 * Output: 3
 * Explanation: III = 3.
 */
let romanToInterger = (s) => {
  var dict = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  s = s.replace("IV", "IIII").replace("IX", "VIIII");
  s = s.replace("XL", "XXXX").replace("XC", "LXXXX");
  s = s.replace("CD", "CCCC").replace("CM", "DCCCC");
  console.log(dict);
  let result = 0;
  for (var i = 0; i < s.length; i++) {
    result += dict[s[i]];
  }
  return result;
};
// console.log(romanToInterger("MCMXCIV"));
//#endregion ex_13
//#region ex_14
//14. LONGEST COMMON PREFIX
var arrStr = ["flower", "flow", "fl"];
let longestCommonPrefix = (strs) => {
  if (strs.length === 0) {
    return "";
  }
  // if array has 1 word, return the whole word
  if (strs.length === 1) {
    return strs[0];
  }
  // set a variable prefix equal to empty string
  let prefix = "";
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] === strs[0][i]) {
        continue;
      } else {
        return prefix;
      }
    }
    prefix += strs[0][i];
  }
  return prefix;
};
// console.log(longestCommonPrefix(arrStr));
//#region ex_20
// 20. VALID PARENTHESES
/**
 * Input: s = "()"
 * Output: true
 * Input: s = "()[]{}"
 * Output: true
 * Input: s = "(]"
 * Output: false
 */

var isValid = (str) => {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "{") {
      stack.push("}");
    } else if (str[i] == "[") {
      stack.push("]");
    } else if (str[i] == "(") {
      stack.push(")");
    }
    // If a close bracket is found, check that it matches the last stored open bracket
    else if (stack.pop() !== str[i]) {
      return false;
    }
  }
  return !stack.length;
};
// console.log(isValid("()"));

//#endregion ex_20
//#region ex_21
//21. MERGE TWO SORTED LISTS
/**
 * Input: list1 = [1,2,4], list2 = [1,3,4]
 * Output: [1,1,2,3,4,4]
 */

const mergeTwoLists = function (l1, l2) {
  if (l1 === null) {
    return l2;
  }

  if (l2 === null) {
    return l1;
  }

  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};
var l1 = [1, 3, 4];
var l2 = [1, 2, 4];

function linkedList(arr) {
  return arr.reduceRight((next, value) => ({ value, next }), null);
}
l1 = linkedList(l1);
l2 = linkedList(l2);
// console.log(mergeTwoLists(l1, l2));

//26. REMOVE DUPLICATES FROM SORTED ARRAY
/**
 * Input: nums = [1,1,2]
 * Output: 2, nums = [1,2,_]
 */
let removeDuplicate = (nums) => {
  const newSet = new Set(nums);
  console.log(newSet);
  let i = 0;
  newSet.forEach((num) => {
    nums[i] = num;
    i++;
  });
  return newSet.size;
};
var arrNum = [1, 1, 2];
console.log(removeDuplicate(arrNum));

//#endregion EASY

//#region MEDIUM
//2. ADD TO NUMBER - MEDIUM
/**
 * Input: l1 = [2,4,3], l2 = [5,6,4]
 * Output: [7,0,8]
 * Explanation: 342 + 465 = 807.
 */
//THIS SOLUTION IS FOR ARRAY DATA
var list1 = [9, 9, 9, 9, 9, 9, 9];
var list2 = [9, 9, 9, 9];
let addTwoNumber = (list1, list2) => {
  let result = parseInt(list1.join("")) + parseInt(list2.join(""));
  return Array.from(String(result), Number);
};
// console.log(addTwoNumber(list1, list2));
//THIS SOLUTION IS FOR LIST NODE DATA
var addTwoNumbers = function (l1, l2) {
  let sum = 0;
  let current = new ListNode(0);
  let result = current;
  while (l1 || l2) {
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }
    current.next = new ListNode(sum % 10);
    current = current.next;
    sum = sum > 9 ? 1 : 0;
  }
  if (sum) {
    current.next = new ListNode(sum);
  }
  return result.next;
};
//3. Longest Substring Without Repeating Characters
/**
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 */
let lengthOfLongestSubstring = (s) => {
  if (!s) {
    return 0;
  }
  let start = 0;
  let end = 0;
  let maxLength = 0;
  const uniqueChar = new Set();
  while (end < s.length) {
    if (!uniqueChar.has(s[end])) {
      uniqueChar.add(s[end]);
      end++;
      maxLength = Math.max(maxLength, uniqueChar.size);
    } else {
      uniqueChar.delete(s[start]);
      start++;
    }
  }
  return maxLength;
};
// console.log(lengthOfLongestSubstring("pwwkew"));
//#endregion MEDIUM
