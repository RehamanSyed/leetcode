const value = "121212121";
const testString1 = "A man, a plan, a canal, Panama!";
const testString2 = "Hello, World!";

const palindrome = (value) => {
  let plainString = value.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  let start = 0;
  let end = plainString.length - 1;

  while (start < end) {
    if (plainString[start] !== plainString[end]) {
      return `${value} is not a plindrome`;
    }
    start++;
    end--;
  }
  return `${value} <==> is plindrome`;
 };
const result = palindrome(value);
console.log(result);
