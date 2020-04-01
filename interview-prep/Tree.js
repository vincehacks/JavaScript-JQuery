/* Created by Vince Chang */

/* =========================================================================
* Function Name: reversePath
* Task: We have 2 identical DOM trees, A and B. For DOM tree A we have the
* location of an element. Create a function to find the same element in tree B.
  ========================================================================= */
function reversePath(element, root) {

  const path = [];
  let pointer = element;

  // While the current element I am on has a parent, keep going up
  // Get the index of where the current child is in the parent's array of
  // children, then add that index number to path
  while (pointer.parent) {
    const index = pointer.parent.child.indexOf(pointer);
    path.push(index);

    // Get the pointer to point to the parent for the next iteration
    pointer = pointer.parent;
  }

  // Now have moved onto the next tree
  pointer = root;

  // For all the children I have seen to get to the root, iterate over these
  // children until the pointer points at the one we are interested in
  while (path.length) {
    pointer = children[path.pop()];
  }

}