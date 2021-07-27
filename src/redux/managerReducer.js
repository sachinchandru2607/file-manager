import { ActionTypes } from "./action-constants";

const initialState = {
    app : []
};

export const managerReducer = (state = initialState, { type, payload }) => {
    let app = state.app;
    switch(type) {
        case ActionTypes.ADD_FOLDER :
            return { app : [...state.app, payload]};
        
        case ActionTypes.UPDATE_FOLDER : 
            let updateFolderNameArr = app.map((record) => {
                    if(record.id === payload.id) {
                        record.name = payload.folderName;
                    }
                    return record;
            });
            return {app : updateFolderNameArr};
        case ActionTypes.DELETE_FOLDER :
            let filteredArr = app.filter((record) => {
                return record.id !== payload.id;
            });
            return { app : filteredArr}
        default :
            return state;
    }
};