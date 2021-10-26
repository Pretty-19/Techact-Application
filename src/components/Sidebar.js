import React ,{useContext,useState,useEffect} from 'react'
import { AppwriteContext } from "./Appwrite";
import { Server } from "../utils/config";
import CreateIcon from '@material-ui/icons/Create'
import InsertCommentIcon from '@material-ui/icons/InsertComment'
import InboxIcon from '@material-ui/icons/Inbox'
import DraftsIcon from '@material-ui/icons/Drafts'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt'
import AppsIcon from '@material-ui/icons/AppsOutlined'
import FileCopyIcon from '@material-ui/icons/FileCopy'
import ExpandLessIcon from '@material-ui/icons/ExpandLessSharp'
import ExpandMoreIcon from '@material-ui/icons/ExpandMoreSharp'
import AddIcon from '@material-ui/icons/Add'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import SideBarOption from './SideBarOption'


function Sidebar() {
    const [channels, setChannels] = useState([]);
    const appwrite= useContext(AppwriteContext);


    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                <h4>Julia</h4>
            </div>
            <CreateIcon/>
            </div> 
            <SideBarOption Icon={InsertCommentIcon} title="Threads"/>
            <SideBarOption Icon={InboxIcon} title="Mentions & reactions"/>
            <SideBarOption Icon={DraftsIcon} title="Saved items"/>
            <SideBarOption Icon={BookmarkBorderIcon} title="Channel browser"/>
            <SideBarOption Icon={PeopleAltIcon} title="People & user groups"/>
            <SideBarOption Icon={AppsIcon} title="Apps"/>
            <SideBarOption Icon={FileCopyIcon} title="File browser"/>
            <SideBarOption Icon={ExpandLessIcon} title="Show less"/>
            <hr/>
            <SideBarOption Icon={ExpandMoreIcon} title="Channels"/>
            <hr/>
            <SideBarOption Icon={AddIcon} addChannelOptions title="Add Channel"/>
            {channels.map(channel =>
                <SideBarOption title={channel.name}  id={channel.id}/>
                )
            }
        </div>
    )
}

export default Sidebar