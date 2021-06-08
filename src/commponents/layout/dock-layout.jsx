import React from "react";
import Header from '../UserElements/Header.jsx'
import { DockLayout } from "rc-dock";
import "rc-dock/dist/rc-dock.css";

let Overview = {title: "Overview",content: <div></div> };
let HTMLItems = {title: "HTML Tags",content: <div></div> };
let Main = {title: "Main",closable: true,content: (<div><Header/></div>)};
let Code = {title: "Code",content: (<div id="Code"></div>)};
let Style = {title: "Style",content: (<div id="Style"></div>)};
let Design = {title: "Design",content: (<div></div>)};
let Properties = {title: "Properties",content: <div></div>};

let layout = {
  dockbox: {
    mode: "horizontal",
    children: [{ mode: "vertical",size:60,
    children: [{tabs: [{ ...HTMLItems, id: "HTMLItems",minWidth:250, minHeight:150}]}
    ,{tabs: [{ ...Overview, id: "Overview",minHeight:250}]
  }]},
    
  {mode: "vertical",children:[
    {tabs: [{ ...Main, id: "Main",minWidth:450, minHeight:360}]},
    {mode: "horizontal",size: 60,
    children: [{tabs: [{ ...Code, id: "Code",minWidth:250, minHeight:30}]}
    ,{tabs: [{ ...Style, id: "Style",minWidth:250,minHeight:30}]}]}
  ]},
  
  {mode: "vertical",size: 60,
  children: [{tabs: [{ ...Properties, id: "Properties",minWidth:250, minHeight:150}]},
  {tabs: [{ ...Design, id: "Design",minWidth:250, minHeight:250 }]}]}]
}
};

class Root extends React.Component {
  render() {
    return (
      <DockLayout
        defaultLayout={layout}
        dropMode="edge"
        style={{
          position: "absolute",
          left: 10,
          top: 10,
          right: 10,
          bottom: 10
        }}
      />
    );
  }
}


export default Root;

