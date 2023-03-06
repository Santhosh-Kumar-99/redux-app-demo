import { combineReducers } from "redux";
import cakeReducer from "./Cakes/cakeReducer";
import { iceCreamReducer } from "./Icecream/iceCreamReducer";

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})
export default rootReducer