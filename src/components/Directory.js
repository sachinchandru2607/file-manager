import { useDispatch, useSelector } from "react-redux";
import {  useEffect, useRef, useState } from "react";
import FolderPopup from "./FolderPopup";
import { deleteFolder } from "../redux/actions";


const Directory = ({searchTerm}) => {
  const directory = useSelector((state) => state.manager.app);
  const [popupVisbility, setPopupVisibility] = useState(false);
  const [flowtype, setFlowType] = useState("");
  const dispatcher = useDispatch();
  let searchResults = useRef([]);

  useEffect(() => {
    if(searchTerm.trim().length > 0) {
      let filterdList = directory.filter(({name}) => {
        return name.toLowerCase().indexOf(searchTerm) !== -1;
      });
      searchResults.current = filterdList.map(({name,id}) => {
        return (
          <div key = {id} className="directory-record">
             <i className="fa fa-folder-open" fill="none">{name}</i>
             <div className = "directory-record-actions">
             <i onClick = {() => {handleEditFolder({name,id})}} className="fa fa-edit" fill="none" />
             <i onClick = {() => {handleDeleteFolder(id)}}className="fa fa-trash" fill="none" />
             </div>
          </div>
        );
      }); 
    }
  });
  
  const list = directory.map(({name,id}) => {
    console.log("hey");
    return (
      <div key = {id} className="directory-record">
         <i className="fa fa-folder-open" fill="none">{name}</i>
         <div className = "directory-record-actions">
         <i onClick = {() => {handleEditFolder({name,id})}} className="fa fa-edit" fill="none" />
         <i onClick = {() => {handleDeleteFolder(id)}}className="fa fa-trash" fill="none" />
         </div>
      </div>
    );
  }); 
  
/*
isEmptyDirectory - check and return if any files or folder exists
*/

  const isEmptyDirectory = () => {
    if (searchTerm.trim().length > 0 )
    {
      return searchResults.current.length > 0;
    }
    else{
      return list.length > 0;
    } 
  };

  /*
closePopup - update the pop up visibility state on click of close icon in popup
*/
  const closePopup = () => {
    setFlowType({});
    setPopupVisibility(false);
  };

  /*
handleCreateFolder - update the flow type and pop up visibilty state for create flow
*/
  const handleCreateFolder = () => {
    setFlowType({"flowtype" : "create"});
    setPopupVisibility(true);
  };
    /*
handleEditFolder - update the flow type and pop up visibilty state for edit flow
*/

  const handleEditFolder = ({name, id}) => {
    setFlowType({"flowtype" : "edit", "folderName" : name, "id" : id});
    setPopupVisibility(true);
  };
    /*
handleDeleteFolder - dispatch an action to delete the file or folder using its id
*/

  const handleDeleteFolder = (id) => {
    dispatcher(deleteFolder(id));
  };
 
  return (
    <div className = "directory">
      <div className="director-actions">
        <div onClick={handleCreateFolder}>
          <i className="fa fa-folder-open" fill="none">
            Create Folder
          </i>
        </div>
      </div>
      <div>
        <div>Name</div>
        <div className="separator"></div>
        {isEmptyDirectory() ?         <div className = "folder-list">
        {searchTerm.trim().length > 0 ? searchResults.current : list}
        </div>
        : <div className = "empty-dir-msg">No records found</div>
        }

      </div>
      { popupVisbility ? <FolderPopup onClosePopup={closePopup}  flow = {flowtype}  /> : ""}
    </div>
  );
};

export default Directory;
