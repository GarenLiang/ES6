/*Write a function called 'unique' that will remove all the duplicate values from an array.

For example, given the following array:
var numbers = [1, 1, 2, 3, 4, 4];
Your function should return
[1, 2, 3, 4] */

var numbers = [1, 1, 2, 3, 4, 4];
function unique(array) {
  return array.reduce((uniq,e) => {
      if(!uniq.includes(e)){
          uniq.push(e)
          return uniq
      }
      return uniq
  },[])
}
unique(numbers);
