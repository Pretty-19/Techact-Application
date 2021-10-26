import React from 'react';
import  './SidebarOption.css' ;

function SideBarOption({Icon,title}) {
    return (
        <div className="sidebarOption">
            {Icon && <Icon className="sidebarOption__icon"/>}
            {Icon ?  ( <h5>{title}</h5>):
            (<h5 className="sidebarOption__channel">
               <span className="sidebarOption__hash" ># {title}</span>
            </h5>)}
        </div>
    )
}

export default SideBarOption;
