import { useState, useCallback, useEffect } from 'react';
import Fuse from 'fuse.js';
import { useBooks } from '../contexts/BookContext';
import { useBooksActions } from '../contexts/BookContext';

function useSearchAndFilter(initialQuery = '', initialFilterQuery = '') {
  const { state } = useBooks();
  const { bookArray } = state;
  const { dispatch } = useBooksActions();

  const [query, setQuery] = useState(initialQuery);
  const [filterQuery, setFilterQuery] = useState(initialFilterQuery);

  const handleChangeInput = useCallback((e) => {
    setQuery(e.target.value);
  }, []);

  const handleChangeMenu = useCallback((e) => {
    setFilterQuery(e.target.value);
  }, []);

  // Search or filter dispatch action
  const handleSearchOrFilter = useCallback(() => {
    // Set up Fuse
    const searchOptions = {
      includeScore: true,
      threshold: 0.2,
      keys: ["title", "author", "series"],
    };
    const fuse = new Fuse(bookArray, searchOptions);
    dispatch({ type: 'SEARCH_OR_FILTER', payload: { query, fuse, filterQuery } });
  }, [query, bookArray, filterQuery, dispatch]);

  // Changing the search query or filter query runs the search/filter function
  useEffect(() => {
    handleSearchOrFilter();
  }, [handleSearchOrFilter]);

  return {
    query,
    setQuery,
    filterQuery,
    setFilterQuery,
    handleChangeInput,
    handleChangeMenu,
  };
}

export default useSearchAndFilter;
