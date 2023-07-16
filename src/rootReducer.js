import { combineReducers } from "redux";
import navigationReducer from "./features/navigationSlice.js";
import colorReducer from "./features/colorSlice.js";
import goodsReducer from "./features/genderSlice.js";
import productReducer from './features/productSlice.js'

const rootReducer = combineReducers({
    navigation: navigationReducer,
    color: colorReducer,
    goods: goodsReducer,
    product: productReducer,
});

export default rootReducer;