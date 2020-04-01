/* Created by Vince Chang */

/* =========================================================================
* Function Name: flatten
* Task: This function will take a nested array and flatten it. You can not use
* .flat() to solve this problem
*
* Input: [1,2,[3,4,[5,6,7,8],9,10]    Output: [1,2,3,4,5,6,7,8,9,10]
  ========================================================================= */
function flatten(arr) {

  arr.reduce((acc, item) => {
    // First check if the element is a number or an array

    // CASE: Array
    if (Array.isArray(item)) {
      acc = acc.concat.(flatten(item));
    }
    // CASE: Number, just push the number into the accumulator
    else {
      acc.push(item);
    }

    return acc; // Need to return the accumulator, doesn't return by default

  }, []);

  return someNewArray;
}

const args = [1, 2, [3, 4, [5, 6, 7, 8], 9, 10];
flatten.apply(this, args);
