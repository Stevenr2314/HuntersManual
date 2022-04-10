import { combineReducers } from "redux";
import { itemReducer } from "../Components/Items/itemReducer";
import { monsterReducer } from "../Components/Monsters/monsterReducer";
import { weaponReducer } from "../Components/Weapons/weaponsReducer";

export const reducer = combineReducers({
    monsters: monsterReducer,
    items: itemReducer,
    weapons: weaponReducer
})