import "./sidebar.css"
import LineStyleIcon from '@mui/icons-material/LineStyle';
import BookIcon from '@mui/icons-material/Book';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import InventoryIcon from '@mui/icons-material/Inventory';
import PersonIcon from '@mui/icons-material/Person';
import CurrencyRupeeRoundedIcon from '@mui/icons-material/CurrencyRupeeRounded';
import MessageIcon from '@mui/icons-material/Message';
import ReviewsIcon from '@mui/icons-material/Reviews';
import EmailIcon from '@mui/icons-material/Email';

import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <Link to="/"className="link" >
                                <LineStyleIcon className="sidebarIcon" />
                                Home
                            </Link>
                        </li>
                        <li className="sidebarListItem">
                            <BookIcon className="sidebarIcon" />
                            Artciles
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUpIcon className="sidebarIcon" />
                            Reaches
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <Link to="/products" className="link">
                            <InventoryIcon className="sidebarIcon" />
                            Products
                            </Link>
                        </li>
                        <li className="sidebarListItem">
                            <PersonIcon className="sidebarIcon" />
                            Users
                        </li>
                        <li className="sidebarListItem">
                            <CurrencyRupeeRoundedIcon className="sidebarIcon" />
                            Transactions
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Alerts</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <ReviewsIcon className="sidebarIcon" />
                            Feedback
                        </li>
                        <li className="sidebarListItem">
                            <EmailIcon className="sidebarIcon" />
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <MessageIcon className="sidebarIcon" />
                            Messages
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
