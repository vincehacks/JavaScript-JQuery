/*  Created by: Vince Chang */

/* =========================================================================
 * Fictiv Interview
 * Task: Goal was to test my JavaScript skills
   ========================================================================= */

// Write a function that adds 2 numbers
var add = (x, y) => {
  return x + y;
}
console.log(add(1)) // What might this log?
console.log(add(1)(0)) // How is this possible to produce output of 3?


return () => { }

var total = 0;

var add = (x) => {
  total += x
  return (y) => { return throw new Error('yay') }     //varible shadowing
}


// Second Part was to show React
class MyComponent extends Component {
  render() {
    return createtemplate('h1', () =
      <div>H1</div>
  }
}

//$().find('#someid').then('')

// Implement the adder class
class Adder {

  constructor(x) {
    this.total = x
  }

  add = (x) => {
    this.total += x;
    return this;
  }

  result = () => {
    return this.total
  }
}

const a = new Builder()
a.route('/users/:id').handler(DefaultHttpService.handler)

return a.build()

console.log(new Adder(1).add(2).add(3).add().result()) // 6

