import { ActionTypes } from "./action-constants";

const initialState = {
    app : [
        {
            "name" : "folder",
            "type" : "folder",
            "child" : []
        },
        {
            "name" : "folder1",
            "type" : "folder",
            "child" : []
        },
        {
            "name" : "file1.png",
            "type" : "file",
        }
    ]
};

export const managerReducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case ActionTypes.ADD_FILE :
            return {...state,app : payload};
        default :
            return state;
    }

};