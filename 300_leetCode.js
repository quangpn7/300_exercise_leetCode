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
