// 算法的原理为，遇到一个结束的括号时，我们总是要查找最后一个开放的括号是否与之匹配，
// 若找不到开放的括号，或最后一个开放的括号不匹配，则报错。
// 由于总是而且仅需要寻找最后一个元素，所以我们将开放的括号入栈，匹配时则出栈。
// 由于栈的特性，这个算法简单明了，且消耗的时间复杂度为线性级O(n)。
/**
 * 自动检测括号前后是否匹配
 * @param {String} str 要进行判断的字符串
 * @return {Boolean} 判定该字符串是否符合要求
 */
function testBracket (str) {
  const leftBracket = /\(|\[|\{/;
  const rightBracket = /\)|\]|\}/;
  let i = 0;
  let len = str.length;
  let char
  let top
  while (i < len) {
    char = str.charAt(i);
    if (leftBracket.test(char)) {
      stack.push(char);
    } else if (rightBracket.test(char)) {
      top = stack.peek();
      if (top === '(') {
        if (char === ')') {
          stack.pop();
        }
      } else if (top === '[') {
        if (char === ']') {
          stack.pop();
        }
      } else if (top === '{') {
        if (char === '}') {
          stack.pop();
        }
      }
    }
    i++;
  }
  return stack.print().length === 0
}
console.log(testBracket('{()}')) // true
console.log(testBracket('{(}')) // false