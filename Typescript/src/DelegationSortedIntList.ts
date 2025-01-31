import { IntegerList } from './IntegerList.js'
import { SortedIntList } from './hidden/SortedIntListLibrary.js'

/**
 * DelegationSortedIntList -- a variant of a SortedIntList that keeps
 * count of the number of attempted element insertions (not to be confused
 * with the current size, which goes down when an element is removed)
 * and exports an accessor (totalAdded) for this count.
 *
 * @author Jerry Zhou
 *
 */

class DelegationSortedIntList implements IntegerList {
  /**
   * The underlying SortedIntList to which we delegate actual list operations
   * (e.g., insertion, removal, retrieval).
   */
  private delegate: SortedIntList

  /**
   * The total number of times an integer has been attempted to be added.
   */
  private totalAdded: number

  /**
   * Constructs a new DelegationSortedIntList containing an empty internal
   * SortedIntList, and initializes the totalAdded count to zero.
   */
  constructor() {
    this.delegate = new SortedIntList()
    this.totalAdded = 0
  }

  /**
   * Adds a single integer to the delegated list. Increments the totalAdded
   * counter each time this method is called, regardless of whether the
   * delegate chooses to accept or reject the integer.
   *
   * @param num - The integer to add.
   * @returns `true` if the list is changed as a result of the call; otherwise `false`.
   */
  public add(num: number): boolean {
    this.totalAdded++
    return this.delegate.add(num)
  }

  /**
   * Adds all integers from the specified list by iterating manually and
   * calling `add(...)` on each element. This ensures our totalAdded counter
   * is incremented for each insertion attempt.
   *
   * @param list - The IntegerList whose elements should be added.
   * @returns `true` if this list changed as a result of the call; otherwise `false`.
   */
  public addAll(list: IntegerList): boolean {
    let listChanged = false
    for (let i = 0; i < list.size(); i++) {
      this.totalAdded++
      listChanged = this.delegate.add(list.get(i)) || listChanged
    }
    return listChanged
  }

  /**
   * Retrieves the integer at the specified index from the delegated list.
   *
   * @param index - The zero-based index of the element to retrieve.
   * @returns The element located at the specified index.
   */
  public get(index: number): number {
    return this.delegate.get(index)
  }

  /**
   * Removes the first occurrence of the specified integer from the delegated
   * list, if present.
   *
   * @param num - The integer to remove.
   * @returns `true` if an element was removed; otherwise `false`.
   */
  public remove(num: number): boolean {
    return this.delegate.remove(num)
  }

  /**
   * Removes all elements from this list that appear in the specified list.
   *
   * @param list - The list of elements to remove.
   * @returns `true` if this list changed as a result of the call; otherwise `false`.
   */
  public removeAll(list: IntegerList): boolean {
    return this.delegate.removeAll(list)
  }

  /**
   * Returns the current number of elements in the delegated list.
   *
   * @returns The size (length) of the delegated list.
   */
  public size(): number {
    return this.delegate.size()
  }

  /**
   * Retrieves the total count of attempted additions since this list
   * was constructed, irrespective of whether those additions
   * increased the list's size.
   *
   * @returns The number of attempted insertions.
   */
  public getTotalAdded(): number {
    return this.totalAdded
  }
}

export { DelegationSortedIntList }
