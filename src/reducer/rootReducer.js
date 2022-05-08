import { combineReducers } from "redux";
import { itemReducer } from "../Components/Items/itemReducer";
import { listReducer } from "../Components/Lister/listerReducer";
import { monsterReducer } from "../Components/Monsters/monsterReducer";
import { weaponReducer } from "../Components/Weapons/weaponsReducer";

export const reducer = combineReducers({
    lister: listReducer,
})