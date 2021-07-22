import SearchFiles from "./SearchFiles";
import Directory  from "./Directory";

const FileManager = () => {
    return (
        <div className = "file-manager card">
            <h1 className = "centre-align">File Manager</h1>
            <SearchFiles />
            <div className = "director-actions">
            <div>
            <i className ="fa fa-file-o">Add File</i>
            </div>
            <div>
            <i className ="fa fa-folder-open" fill= "none">Add Folder</i>
            </div>
            </div>
            <Directory />
        </div>
    );
};


export default FileManager;