import { useSelector } from "react-redux";

const Directory = () => {
    const directory = useSelector((state) => state.manager.app);

    const list = directory.map(({name, type, child}) => {
        return (
            <div className = "directory-record">
                {name}
            </div>
        );
    });
    return (
        <div className = "directory">
            <div>
                Name
            </div>
            <div className = "separator"></div>
            {list}
        </div>
    );
};

export default Directory;