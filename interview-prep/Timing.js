/* Created by Vince Chang */

/* =========================================================================
* Function Name: debounce
* Task: This function will implement Function.prototype.bind()
*
* Ex.
* const foo = function () {
*  console.log(this.bar);
* }
*
* let baz = foo.bind({ bar: 'hello' });
*
* baz(); // hello
  ========================================================================= */
function debounce(fn, time) {

  let setTimeoutId;

  return function () {

    // It will remove all function calls before it until there is only one
    if (setTimeoutId) {
      clearTimeout(setTimeoutId);
    }
    setTimeoutId = setTimeout(() => {
      // When time has expired, evoke the function
      fn.apply(this, arguments);
      setTimeoutId = null;
    }, time)
  }
}