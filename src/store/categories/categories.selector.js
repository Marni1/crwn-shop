import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories

export const selectCatergories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.categories
)


export const selectCategoriesMap = createSelector(
    [selectCatergories],
    (categories) => categories
        .reduce((acc, category) => {
            const { title, items } = category;
            acc[title.toLowerCase()] = items
            return acc
        }, {})
)


export const selectCategoriesIsLoading = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => {
        return categoriesSlice.isLoading
    }
)

