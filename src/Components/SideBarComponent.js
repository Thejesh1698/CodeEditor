import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUpload} from '@fortawesome/free-solid-svg-icons';

const dirTree = require("directory-tree");
const {ipcRenderer} = window.require('electron');

class SideBarComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            folder_tree: {
                name: "Folder Name",
            },
        }
    }

    componentDidMount() {
        ipcRenderer.on('directory-opened', (event, file) => {
            if(file["filePaths"].length > 0){
                this.changeFolderTree(file["filePaths"][0]);
            }
        })
    }

    changeFolderTree = (path) => {
        const tree = dirTree(path, {'normalizePath': true});
        this.setState({folder_tree: tree});
        console.log(tree);
    }

    openFolderFile = () => {
        ipcRenderer.send('openFolder', '');
    }

    render() {
        return (
            <>
                <div className="sidebar-wrapper">
                    <div className="sidebar-main">
                        <div className="folderTreeHeader">{this.state.folder_tree.name}</div>
                        <div className="search-area">
                            <div className="search-box">
                                <input className="search-input" placeholder="Search..."/>
                            </div>
                            <button className="search-plus">
                                <FontAwesomeIcon icon={faUpload} size="lg" onClick={this.openFolderFile}/>
                            </button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default SideBarComponent;