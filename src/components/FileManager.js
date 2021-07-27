import SearchFiles from "./SearchFiles";
import Directory  from "./Directory";
import { useState } from "react";

const FileManager = () => {

    const [searchTerm, setSearchTerm] = useState("");
/*
searchFiles - update the searchterm state to re-render directory list 
*/

    const searchFiles = (text) => {
        setSearchTerm(text);
    };

    return (
        <div className = "file-manager card">
            <h1 className = "centre-align">File Manager</h1>
            <SearchFiles searchFiles = {searchFiles} />
            <Directory searchTerm = {searchTerm} />
        </div>
    );
};


export default FileManager;