let nums = [6, 3, 5, 7];
let target = 8;

function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
  
    for (let j = i; j < nums.length; j++) {
        console.log(nums[i] + nums[j] === target);
      if (i !== j && nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}
const result = twoSum(nums, target);
console.log("Two Sum Result", result);

// module.exports = twoSum;
