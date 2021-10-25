import {combineReducers} from "redux";
import cellsReducer from "./cellsReducer";
import { Cell } from "../cell";

const reducers = combineReducers({
  cells: cellsReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;