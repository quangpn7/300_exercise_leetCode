//#region ex_1
//1. TWO SUM - EASY
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
console.log(twoSum(arrNums, 10));
//#endregion ex_1
//#region ex_2
//2. ADD TO NUMBER
/**
 * Input: l1 = [2,4,3], l2 = [5,6,4]
 * Output: [7,0,8]
 * Explanation: 342 + 465 = 807.
 */

var list1 = [1, 2, 3];
var list2 = [4, 5, 6];
let addTwoNumber = (list1, list2) => {
  let listResult = [];
  list1.reverse().forEach((num, index) => {
    listResult.push(num + list2.reverse()[index]);
  });
  return listResult.reverse();
};
console.log(addTwoNumber(list1, list2));
//#endregion ex2
