import { ActionTypes } from "./action-constants"

export const addFile = (file) => {
    return {
        type : ActionTypes.ADD_FILE,
        payload : file
    };
};
