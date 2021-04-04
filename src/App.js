// import React from 'react';
import './App.css';
// import * as GlobalContext from "./GlobalContext";
import SideToolBarComponent from "./Components/SideToolBarComponent";
import HeadToolBarComponent from "./Components/HeadToolBarComponent";
import FooterToolBarComponent from "./Components/FooterToolBarComponent";
import SideBarComponent from "./Components/SideBarComponent";
import EditorComponent from "./Components/EditorComponent";
import "./assets/styles/style.css";


function App() {
  return (
      <>
        {/*{() => {*/}
        {/*    if (!GlobalContext.open_folder.open) {*/}
        {/*        let win = new BrowserWindow()*/}
        {/*        win.loadURL('/welcome_component')*/}
        {/*    }*/}
        {/*}}*/}
        {/*header*/}
        {/*left bar*/}
        {/*side bar*/}
        {/*code editor*/}
        {/*right bar*/}
        <div className="main-body-wrapper">
          <div className="main-body">
            <SideToolBarComponent/>
            <HeadToolBarComponent/>
            <div className="main-center-wrapper">
              <div className="main-center-area">
                <SideBarComponent/>
                <EditorComponent/>
              </div>
            </div>
            <FooterToolBarComponent/>
          </div>
        </div>
      </>
  );
}

export default App;
