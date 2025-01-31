import { InheritanceSortedIntList } from '../src/InheritanceSortedIntList.js'
import { IntegerList } from '../src/IntegerList.js'
import { printList } from '../src/main.js'

/**
 * Uncomment the following code to test your implementation
 * Select all and (CTRL + /) or (COMMAND + /)
 * Feel free to write more tests for your implementation.
 * Remember to run `npm install` before running tests to ensure jest is installed. */

/**
* Tests for the add() method.
*/
test('test add()', () => {
  const list1 = new InheritanceSortedIntList()
  // add 5 elements to our list.
  list1.add(1)
  list1.add(3)
  list1.add(2)
  list1.add(4)
  list1.add(2)

  // check that the total number of elements added is 5.
  expect(list1.getTotalAdded()).toBe(5)
  // printList(list1);
})

/**
 * Test for the addAll() method.
 */
test('test addAll()', () => {
  const list1 = new InheritanceSortedIntList()
  const list2 = new InheritanceSortedIntList()

  // add 5 elements to our first list.
  list1.add(1)
  list1.add(3)
  list1.add(2)
  list1.add(4)
  list1.add(2)

  // check that the total number of elements added is 5.
  expect(list1.getTotalAdded()).toBe(5)

  // add 2 elements to a second list.
  list2.add(3)
  list2.add(0)

  // check that the total number of elements added is 2.
  expect(list2.getTotalAdded()).toBe(2)

  // add the first list (5 elements) to our second list (2 elements).
  list2.addAll(list1)

  // check that the total number of elements added to our second list is 7.
  expect(list2.getTotalAdded()).toBe(7)
})
