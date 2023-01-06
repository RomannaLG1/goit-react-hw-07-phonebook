import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilters = state => state.filters.name;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilters],
  (contacts, filterName) => {
    const visibleContacts = [...contacts].filter(({ name }) =>
      name.toLowerCase().includes(filterName.toLowerCase())
    );
    return visibleContacts;
  }
);
