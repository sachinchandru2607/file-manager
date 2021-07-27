import { ActionTypes } from "./action-constants";
import {store} from "../redux/store";

let folderIdentifier = 0;


export const addFolder = (folderName) => {
    let state = store.getState();
    folderIdentifier++;
    let folderObj = {
        "name" : checkAndReturnName(state.manager.app, folderName),
        "date" : new Date(),
        "child" : [],
        "id" : "folder" + folderIdentifier
    }
    return {
        "type" : ActionTypes.ADD_FOLDER,
        "payload" : folderObj
    };
};


export const updateFolder = (folderName, id) => {

    return {
        "type" : ActionTypes.UPDATE_FOLDER,
        "payload" : {
            folderName,
            id
        }
    };
};


export const deleteFolder = (id) => {
    return {
        "type" : ActionTypes.DELETE_FOLDER,
        "payload" : {
            id
        }
    };
}


const checkAndReturnName = (arr, name) => {
    let folderName = name;
    for(let i = 0; i < arr.length; i++){
        if(arr[i]["name"] === name){
            folderName = folderName + folderIdentifier;
            break;
        }
    }
    return folderName;
};
