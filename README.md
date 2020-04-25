# JavaScript-JQuery

Created by Vince Chang </br>

Practicing basic functionality of JS and JQuery

Topics:

- Webpack
- RequireJS
- ES6

### CALCULATOR

- Calculator that will do basic functionality. Built with pure HTML, CSS, and JS

![Final Product](https://github.com/vincehacks/JavaScript-JQuery/blob/master/calculator/FinalProject.png)

#### JAVASCRIPT:

- Light weight interpreted language with first-class functions
- Prototype based
- Dynamic Typed Language: don't need to specify the data type a var will contain
- Object Oriented
- JS is single threaded not like java
- Js does everything camelCase

#### DIFFERENCE BETWEEN VAR AND LET

**var**

- You can declare a var after it has been initialized and it will still work
  (variable hoisting)
- Can declare the same variable as many times are you like

**let**

- This is preferred over using var
- Works the same way as you would use it in Java

- Always use let never use var
- Scope is the difference and
- Let has block level scope and var has function level scope

#### BUILT IN FUNCTIONS FOR ARRAYS

```
.isArray()
.filter()
.reduce()
.concat()
.join()
.pop()
.push()
.map()
.flat()
```

#### ANONYMOUS FUNCTIONS

- Functions with no name
- Used with event handlers
- Can be saved into a var

#### JAVASCRIPT OOP

**Encapsulated**

- Object data/functions can be stored in an object package (namespace)

**Polymorphism**

- Ability of multiple object types to implement the same functionality

#### OBJECT PROTOTYPES

- To provide inheritance, object have have:
  **Prototype object**
  - Template object that it inherits methods and properties from
    **Prototype chain**
  - Cycle of object prototypes having object prototypes

**Everything inherits from Object.Prototype !!**

#### SCOPE FUNCTIONS

```
.call() , takes a lot of arguments, calls the function
.apply(), takes a lot of arguments, calls the function
.bind(), changes scope without calling the actual function itself, executes later
```

#### TIMING FUNCTIONS

```
.setInterval()
.setTimeout()
```

- Debounce: A way of stopping something from doing it too much
  - Ex. Auto complete: Do not want to fire a search for everything I type, so I
    can set up a interval to only send request after some time after

#### PROMISES

```
.setInterval()
.setTimeout()
```

- Promises to return something eventually
- A.K.A asynchronous wait

#### COMMON INTERVIEW QUESTIONS

1. What is the difference between const, let, and var ?

   - const: not immutable, can't point a const to a different pointer
   - let: you can change the pointer but only within scope
   - var: hoisted to the top, so if you tried to access const and let before, it
     will throw a reference error, but var will throw undefined

2. What is Prototypical Inheritance ?

   - Prototype: a object that is a prototype of another object, has traits from the
     parent that it can inherit or override

3. What is this in JavaScript ?

   - this refers to the current scope which can change, otherwise it is referred
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
