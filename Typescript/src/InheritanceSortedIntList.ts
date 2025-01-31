import { IntegerList } from './IntegerList.js'
import { SortedIntList } from './hidden/SortedIntListLibrary.js'

/**
 * InheritanceSortedIntList -- a variant of a SortedIntList that keeps
 * count of the number of attempted element insertions (not to be confused
 * with the current size, which goes down when an element is removed)
 * and exports an accessor (totalAdded) for this count.
 *
 * @author Jerry Zhou
 *
 */

class InheritanceSortedIntList extends SortedIntList {
  /**
   * The total number of times an integer has been attempted to be added.
   * This does not decrease when items are removed.
   */
  private totalAdded: number

  /**
   * Constructs a new InheritanceSortedIntList with an empty sorted list
   * and initializes the totalAdded count to zero.
   */
  constructor() {
    super()
    this.totalAdded = 0
  }

  /**
   * Adds a single integer to the list and increments the totalAdded counter.
   *
   * @param num - The integer value to add.
   * @returns `true` if the list is changed as a result of the call; otherwise `false`.
   */
  public add(num: number): boolean {
    this.totalAdded++
    return super.add(num)
  }

  /**
   * Adds all elements from the given IntegerList to this list. Since the
   * `super.addAll()` method internally calls `add(num)` for each element,
   * the totalAdded counter will be incremented automatically for each item.
   *
   * @param list - An IntegerList whose elements should be added to this list.
   * @returns `true` if this list changed as a result of the call; otherwise `false`.
   */
  public addAll(list: IntegerList): boolean {
    return super.addAll(list)
  }

  /**
   * Returns the total number of attempted additions made to this list.
   *
   * @returns The total number of times `add()` or `addAll()` was called, cumulatively.
   */
  public getTotalAdded(): number {
    return this.totalAdded
  }
}

export { InheritanceSortedIntList }
