# JavaScript-JQuery

Created by Vince Chang </br>

Practicing basic functionality of JS and JQuery

Topics:

- Webpack
- RequireJS
- ES6

### Calculator

- Calculator that will do basic functionality. Built with pure HTML, CSS, and JS

![Final Product](https://github.com/vincehacks/JavaScript-JQuery/blob/master/calculator/FinalProject.png)

#### JS:

- JS is single threaded not like java
- Js does everything camelCase
- Always use let never use var
  - Scope is the difference and
  - Let has block level scope and var has function level scope

#### Helpful Built in functions for Arrays

```
.isArray()
.filter()
.reduce()
.concat()
.join()
.pop()
.push()
.map()
```

#### Common Interview Questions

1. What is the difference between const, let, and var ?

   - const: not immutable, can't point a const to a different pointer
   - let: you can change the pointer but only within scope
   - var: hoisted to the top, so if you tried to access const and let before, it
     will throw a reference error, but var will throw undefined

2. What is Prototypical Inheritance ?

   - Prototype: a object that is a prototype of another object, has traits from the
     parent that it can inherit or override

3. What is this in JavaScript ?

   - this refers to the current scope which can change, otherwise it is refered
     to as the Global Window Object

4. What is the Data Structure of the DOM?

   - Tree

5. How would you implement a Stack or Queue in JavaScript?

   - Using an array with pop(), push(), and shift()

6. What are call and apply?

   - These are ways of changing the scope of the calling function

7. What is Event delegation ?

   - You can have one EventListener that will handle things like when people
     click on a button
   - Better to have 1 event listener vs 60 for performance reasons
   - Mention bubbling to the top

8. What is a worker and when would you use one?
   - Worker is something you would use in a browser to offload computationally
     expensive work, because there is only 1 thread in JavaScript, you don't
     want to block the UI
