/* Created by Vince Chang */

/* =========================================================================
* Function Name: main
* Task:
* 1. Create a "Foods" class or constructor that will take two arguments: a
* root element and a data object (foodData).
* 2. Render all of the items in the data object into the DOM with the root
* element as the parent
* 3. If the user clicks a food item, it should be removed from the list
  ========================================================================= */

const rootElement = document.querySelector('.foods');

// This is given as the array of objects
const foodData = [
  {
    id: 1,
    image: '🌮',
    name: 'taco'
  },
  {
    id: 2,
    image: '🍔',
    name: 'burger'
  },
  {
    id: 3,
    image: '🍆',
    name: 'eggplant'
  },
  {
    id: 4,
    image: '🍎',
    name: 'apple'
  },
  {
    id: 5,
    image: '🥞',
    name: 'pancakes'
  },
];

class Foods {
  /* =========================================================================
  * Function Name: constructor
  * Task: This will take a root element and some food data and assign them to
  * variables
    ========================================================================= */
  constructor(el, foodData) {
    this._root = el;
    this._data = foodData;
  }

  /* =========================================================================
  * Function Name: renderList
  * Task: This will add an eventListener to the root element for a click event/
  * The click event will
  *
  * A fragment is created and for each item in the foodData, createFoodItem
  * will be called. So basically, the fragment will wrap the div of each food
  * item's picture and name. This big fragment is now appended to the root
    ========================================================================= */
  renderList() {
    this._root.addEventListener('click', event => {
      // target is the thing that is being clicked on`
      const { target } = event;
      target.remove();
    });

    // Good to use a fragment 1st then append to the DOM. It is best for
    // performance to only append to the DOM once instead of over and over.
    const fragment = document.createDocumentFragment();

    this._data.forEach(i => {
      fragment.appendChild(this.createFoodItem(i));
    });

    this._root.appendChild(fragment);
  }

  /* =========================================================================
  * Function Name: createFoodItem
  * Task: This will take a food object and first create a div to put each food
  * item's image and name. At the end it will return this div back to renderList
    ========================================================================= */
  createFoodItem(item) {
    const itemEl = document.createElement('div');
    itemEl.innerText = item.image;
    itemEl.classList.add(item.name);
    return itemEl;
  }
}
