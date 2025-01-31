package edu.cmu.cs.cs214.rec04;

/**
 * DelegationSortedIntList -- a variant of a SortedIntList that keeps
 * count of the number of attempted element insertions (not to be confused
 * with the current size, which goes down when an element is removed)
 * and exports an accessor (totalAdded) for this count.
 *
 * @author Jerry Zhou
 *
 */

public class DelegationSortedIntList implements IntegerList {
    // Write your implementation below with API documentation
    /** The real SortedIntList that we delegate to. */
    private final SortedIntList delegate;

    /** Tracks how many total integers have been added, regardless of removal. */
    private int totalAdded;

    /**
     * Default constructor.
     */
    public DelegationSortedIntList() {
        this.delegate = new SortedIntList();
        this.totalAdded = 0;
    }

    /**
     * Adds an integer to the internal SortedIntList and increments the totalAdded counter.
     *
     * @param num The integer to add.
     * @return true if the list changes as a result of this call.
     */
    @Override
    public boolean add(int num) {
        totalAdded++;
        return delegate.add(num);
    }

    /**
     * Adds all elements of the given list to the internal SortedIntList,
     * incrementing the totalAdded counter for each attempted addition.
     *
     * @param list The list of integers to be added.
     * @return true if the list changes as a result of this call.
     */
    @Override
    public boolean addAll(IntegerList list) {
        boolean modified = false;
        for (int i = 0; i < list.size(); i++) {
            totalAdded++;
            modified |= delegate.add(list.get(i));
        }
        return modified;
    }

    /**
     * Returns the integer at the specified position in the internal list.
     *
     * @param index index of the element to return.
     * @return the element at the specified position in this list.
     */
    @Override
    public int get(int index) {
        return delegate.get(index);
    }

    /**
     * Removes the first occurrence of the specified element from the internal list.
     *
     * @param num The element to remove.
     * @return true if an element was removed.
     */
    @Override
    public boolean remove(int num) {
        return delegate.remove(num);
    }

    /**
     * Removes from the list all elements that are contained in the specified IntegerList.
     *
     * @param list The list containing elements to remove.
     * @return true if this list changed as a result.
     */
    @Override
    public boolean removeAll(IntegerList list) {
        return delegate.removeAll(list);
    }

    /**
     * Returns the number of elements in the internal list.
     *
     * @return The size of the internal list.
     */
    @Override
    public int size() {
        return delegate.size();
    }

    /**
     * Returns how many times we've called add(...) since creation.
     *
     * @return The total number of attempted additions to this delegated list.
     */
    public int getTotalAdded() {
        return totalAdded;
    }
}