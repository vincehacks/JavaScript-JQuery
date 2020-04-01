/* Created by Vince Chang */

/* =========================================================================
* Function Name: bind
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
Function.prototype.bind = function (context) {

  const fn = this;

  return function () {
    fn.call(context);
  }
}