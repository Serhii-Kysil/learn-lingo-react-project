export const selectTeachers = (state) => state.teachers.items;

export const selectIsItemsLoading = (state) => state.teachers.isItemsLoading;

export const selectItemsError = (state) => state.teachers.itemsError;

export const selectFavorites = (state) => state.teachers.favorite;

export const selectCurrentPage = (state) => state.teachers.currentPage;

export const selectLastKey = (state) => state.teachers.lastKey;

export const selectHasMore = (state) => state.teachers.hasMore;
