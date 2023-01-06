import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilters = state => state.filters;
// export const selectVisibleContacts = state => state.contacts.items;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilters],
  (contacts, filters) => {
    const visibleContacts = [...contacts].filter(({ name }) =>
      name.toLowerCase().includes(filters.name.toLowerCase())
    );
    return visibleContacts;
  }
);
