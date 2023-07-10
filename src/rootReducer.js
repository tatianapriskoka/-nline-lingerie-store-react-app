import { combineReducers } from "redux";
import navigationReducer from "./features/navigationSlice.js";
import colorReducer from "./features/colorSlice.js";
import goodsReducer from "./features/genderSlice.js";

const rootReducer = combineReducers({
    navigation: navigationReducer,
    color: colorReducer,
    goods: goodsReducer,
});

export default rootReducer;