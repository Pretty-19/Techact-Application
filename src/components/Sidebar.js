import React from 'react'
import CreateIcon from '@material-ui/icons/Create'


function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                <h2>User</h2>
                <h3>username</h3>
            </div>
            <CreateIcon/>
            </div> 
        </div>
    )
}

export default Sidebar
