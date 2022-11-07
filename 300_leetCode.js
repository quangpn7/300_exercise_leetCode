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
//#endregion ex_14
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
//#endregion ex_21
//#region ex_26
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
// console.log(removeDuplicate(arrNum));
//#endregion ex_26
//#region ex_27
//27. REMOVE ELEMENT
/**
 * Input: nums = [3,2,2,3], val = 3
 *Output: 2, nums = [2,2,_,_]
 *Explanation: Your function should return k = 2, with the first two elements of nums being 2.
 *It does not matter what you leave beyond the returned k (hence they are underscores).
 */
var nums = [3, 2, 2, 3];
let removeElement = (nums, val) => {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === val) {
      nums.splice(i, 1);
    }
    console.log(nums);
  }
  return nums.length;
};
// console.log(removeElement(nums, 2));
//#endregion ex_27
// TRIED FILTER METHOD BUT LEETCODE DOESNT ACCEPT THE SOLUTION
//#region ex_35
// 35. SEARCH INSERT POSITION
let searchInsertPosition = (nums, target) => {
  let result = nums.findIndex((num) => num === target);
  if (result === -1) {
    if (target < nums[0]) {
      return 0;
    } else if (target > nums[nums.length - 1]) {
      return nums.length;
    } else {
      nums.forEach((num, index) => {
        if (target >= num && target <= nums[index + 1]) {
          result = index + 1;
        }
      });
    }
  }
  return result;
};
var nums = [1, 3, 5, 6];
// console.log(searchInsertPosition(nums, 2));
//#endregion ex_35
//#region ex_58
//58. LENGTH OF LAST WORD

let lengthOfTheLastWord = (str) => {
  let arrLetter = str.split(" ");
  arrLetter = arrLetter.filter((item) => {
    return item !== "";
  });
  console.log(arrLetter);
  return arrLetter[arrLetter.length - 1].length;
};
// console.log(lengthOfTheLastWord("   fly me   to   the moon  "));
//#endregion ex_58
//#region ex_66
//66. Plus One
/**
 * Input: digits = [1,2,3]
 *Output: [1,2,4]
 *Explanation: The array represents the integer 123.
  Incrementing by one gives 123 + 1 = 124.
  Thus, the result should be [1,2,4].
  *Input: digits = [9]
  *Output: [1,0]
  *Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].
 */
let plusOne = (digits) => {
  let num = BigInt(digits.join("")) + 1n;
  return num.toString().split("");
};
// var digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
// var digits2 = [9];
// var digits3 = [1, 2, 3];
// console.log(plusOne(digits));
// console.log(plusOne(digits2));
// console.log(plusOne(digits3));
//#endregion ex_66
//#region ex_67
// 67. Add Binary
/**
 * Input: a = "11", b = "1"
 * Output: "100"
 * Input: a = "1010", b = "1011"
 * Output: "10101"
 */

let addBinary = (a, b) => {
  return (BigInt("0b" + a) + BigInt("0b" + b)).toString(2);
};
// console.log(addBinary("11", "1"));
//#endregion ex_67
//#region ex_69
// 69. Sqrt(x)
let mySqrt = (x) => {
  return Math.floor(Math.sqrt(x));
};
// console.log(mySqrt(8));
//#endregion ex_67
//#region ex_70
// 70. CLIMBING STAIRS
/**
 * Input: n = 2
 * Output: 2
 * Explanation: There are two ways to climb to the top.
 * 1. 1 step + 1 step
 * 2. 2 steps
 */
let climbingStairs = (n) => {
  if (n == 1 || n == 0) {
    return 1;
  }
  let first = 1;
  let second = 2;
  for (let i = 3; i <= n; i++) {
    let third = first + second;
    first = second;
    second = third;
  }
  return second;
};
// console.log(climbingStairs());

//#endregion ex_70
//#region ex_83
// 83. REMOVE DUPLICATES FROM SORTED LIST
/**
 * Input: head = [1,1,2]
 * Output: [1,2]
 * Input: head = [1,1,2,3,3]
 * Output: [1,2,3]
 */
// let deleteDulicates = (head) => {
//   let set = new Set(head);
//   return set;
// };
//return after getting better at linked list
// console.log(deleteDulicates([1, 1, 2, 3, 4, 5, 6]));
//#endregion ex_83
//#region ex_88
// 88. MERGE SORTED ARRAY
/**
 * Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
 * Output: [1,2,2,3,5,6]
 * Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
 The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
 */
let merge = (nums1, m, nums2, n) => {
  insertIndex = m + n - 1;
  //wrap the index of nums1 and nums2 by -1 the m and n
  m--;
  n--;
  while (n >= 0) {
    if (m >= 0 && nums1[m] > nums2[n]) {
      nums1[insertIndex] = nums1[m];
      m--;
    } else {
      nums1[insertIndex] = nums2[n];
      n--;
    }
    insertIndex -= 1;
  }
  return nums1;
};

// var nums1 = [1, 2, 5, 7, 0, 0];
// var m = 4;
// var nums2 = [2, 5];
// var n = 2;
// console.log(merge(nums1, m, nums2, n));
//#endregion ex_88

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
