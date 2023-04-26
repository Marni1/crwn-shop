import { createAction } from "../../utils/reducer/reducer.utils"
import { CATEGORIES_ACTION_TYPE } from "./categories.types"

export const setCategories = (categoriesArray) => {
    return createAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES, categoriesArray)
}