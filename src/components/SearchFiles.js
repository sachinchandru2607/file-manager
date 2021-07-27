import { useState } from "react";


const SearchFiles = ({searchFiles}) => {
    const [searchTerm, setSearchTerm] = useState("");
        /*
handleSearchTerm - update the searchterm state and bubble up the event to handle in directory
*/
    const handleSearchTerm = (e) => {
        setSearchTerm(e.target.value);
        searchFiles(e.target.value);
    };

    return (
        <div className = "search-files ">
            <input placeholder = "Search for files" onChange = {handleSearchTerm} value = {searchTerm}/>
        </div>
    );
};

export default SearchFiles;