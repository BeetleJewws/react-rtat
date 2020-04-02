import { GET_CLASS, GET_CLASSES } from "../actions/types.js";

const initialState = {
    all: [],
    selected: {},
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CLASSES:
            return {
                ...state,
                all: action.payload
            };
        case GET_CLASS:
            return {
                ...state,
                selected: action.payload
            };
        default:
            return state;
    }
}