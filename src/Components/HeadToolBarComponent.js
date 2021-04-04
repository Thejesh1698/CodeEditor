import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faWindowMinimize, faWindowRestore, faWindowClose} from '@fortawesome/free-solid-svg-icons'

const {ipcRenderer} = window.require('electron')

class HeadToolBarComponent extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    minimizeMain = () => {
        ipcRenderer.send('minimizeApp', '');
    }

    maximizeMain = () => {
        ipcRenderer.send('maximizeApp', '');
    }

    closeMain = () => {
        ipcRenderer.send('exitApp', '');
    }

    render() {
        return (
            <>
                <div className="head-tool-bar-wrapper">
                    <div className="head-tool-bar">
                        <FontAwesomeIcon icon={faWindowClose} size="lg" className="window-options main-close"
                                         onClick={this.closeMain}/>
                        <FontAwesomeIcon icon={faWindowRestore} size="lg" className="window-options main-resize"
                                         onClick={this.maximizeMain}/>
                        <FontAwesomeIcon icon={faWindowMinimize} size="lg" className="window-options main-minimize"
                                         onClick={this.minimizeMain}/>
                    </div>
                </div>
            </>
        );
    }
}

export default HeadToolBarComponent;