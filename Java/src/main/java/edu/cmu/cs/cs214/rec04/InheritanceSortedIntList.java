package edu.cmu.cs.cs214.rec04;

/**
 * InheritanceSortedIntList -- a variant of a SortedIntList that keeps
 * count of the number of attempted element insertions (not to be confused
 * with the current size, which goes down when an element is removed)
 * and exports an accessor (totalAdded) for this count.
 *
 * @author Jerry Zhou
 *
 */

public class InheritanceSortedIntList extends SortedIntList {
    // Write your implementation below with API documentation
    /** Tracks how many total integers have been added, regardless of removal. */
    private int totalAdded;

    /**
     * Default constructor.
     */
    public InheritanceSortedIntList() {
        super();
        this.totalAdded = 0;
    }

    /**
     * Adds an integer to the list and increments the totalAdded counter.
     *
     * @param num The integer to add.
     * @return true if the list is changed as a result of the call.
     */
    @Override
    public boolean add(int num) {
        totalAdded++;
        return super.add(num);
    }

    /**
     * Adds all of the elements of the IntegerList to this list,
     * and increments the totalAdded counter for each attempted addition.
     *
     * @param list The IntegerList containing elements to be added.
     * @return true if this list changed as a result of the call.
     */
    @Override
    public boolean addAll(IntegerList list) {
        return super.addAll(list);
    }

    /**
     * Returns how many times we've called add(...) since creation.
     *
     * @return The total number of attempted additions to this list.
     */
    public int getTotalAdded() {
        return totalAdded;
    }
}