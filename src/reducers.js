import { SELECT_BOARD } from "./actionTypes";

export function selectedBoardReducer(state=0,action) {
    const {payload, type} = action;
    switch(type) {
        case SELECT_BOARD:
            return payload;
        default:
            return state;
    }

}