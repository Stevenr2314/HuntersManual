import { combineReducers } from "redux";
import { itemReducer } from "../Components/Items/itemReducer";
import { monsterReducer } from "../Components/Monsters/monsterReducer";

export const reducer = combineReducers({
    monsters: monsterReducer,
    items: itemReducer
})