import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import  { addFolder, updateFolder } from '../redux/actions';


const FolderPopup = ({onClosePopup, flow,}) => {
    const [popupVisbility, setPopupVisibility] = useState(true);
    const [folderName, setFolderName] = useState("");
    const dispatcher = useDispatch();
    const displayStyle = {
        display: popupVisbility ? "block" : "None"
    };

/*
hidePopup - hide the popup onclick of close icon and updates the state
*/
    const hidePopup = () => {
        setPopupVisibility(false);
        onClosePopup();
    };

    /*
handleFolderAction - handle the button click on popup to create or update by dispatching an action to store
*/
    const handleFolderAction = (e) => {
        e.preventDefault();
        if(flow.flowtype === "edit") {
            dispatcher(updateFolder(folderName, flow.id));
        }else {
            dispatcher(addFolder(folderName));
        }
        setPopupVisibility(false);
        onClosePopup();

    };

    useEffect(() => {
        if(flow.flowtype === "edit") {
            console.log(flow)
            setFolderName(flow.folderName);
        }
    },[flow]);

    return (
        <div style={displayStyle} className="popup">
            <div className="popup-content">
                <div className="popup-header">
                    <span onClick={hidePopup} className="close">&times;</span>
                    <h5>Folder Name</h5>
                </div>
                <div className="separator"> </div>
                <div className="popup-flds">
                    <form onSubmit = {handleFolderAction} className = "m-8">
                    <input value = {folderName} placeholder = " Enter Folder Name" onChange = {(e) => setFolderName(e.target.value)} required/>
                    <div className = "center-btn">
                        <button type = "submit">{flow.flowtype === "create" ? "Create" : "Update"}</button>
                    </div>
                    </form>
                </div>
            </div>

        </div>
    );
};


export default FolderPopup;