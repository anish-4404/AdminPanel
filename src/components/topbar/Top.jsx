import React from 'react'
import "./Top.css"
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsIcon from '@mui/icons-material/Settings';
export default function Top() {
  return (
    <div className="topbar">
        <div className="topbarWrapper">
            <div className="topleft">
                <span className="logo">AKP</span>
            </div>
            <div className="topright">
                <div className="topbarIcons">
                <NotificationsActiveIcon/>
                </div>
                <div className="topbarIcons">
                <SettingsIcon/>
                </div>
                
                
            </div>
        </div>
    </div>
  )
}
