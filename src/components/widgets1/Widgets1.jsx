import "./widgets1.css"
import VisibilityIcon from '@mui/icons-material/Visibility';
export default function Widgets1() {
  return (
    <div className="widgets1">
      <span className="widgets1Title">New Join Members</span>
      <ul className="widgets1List">
        <li className="widgets1ListItem">
            <img src="./logo.png" alt="" className="widgets1Img" />
            <div className="widgets1User">
                <span className="widgets1Username">Anish Kumar Patel</span>
                <span className="widgets1UserTitle">Associate Developer</span>
            </div>
            <button className="widgets1Button">
                <VisibilityIcon className="widgets1Icon"/>
                Display
            </button>
        </li>
        <li className="widgets1ListItem">
            <img src="" alt="error" className="widgets1Img" />
            <div className="widgets1User">
                <span className="widgets1Username">Anish Kumar Patel</span>
                <span className="widgets1UserTitle">Associate Developer</span>
            </div>
            <button className="widgets1Button">
                <VisibilityIcon className="widgets1Icon"/>
                Display
            </button>
        </li>
        <li className="widgets1ListItem">
            <img src="" alt="" className="widgets1Img" />
            <div className="widgets1User">
                <span className="widgets1Username">Anish Kumar Patel</span>
                <span className="widgets1UserTitle">Associate Developer</span>
            </div>
            <button className="widgets1Button">
                <VisibilityIcon className="widgets1Icon"/>
                Display
            </button>
        </li>
        <li className="widgets1ListItem">
            <img src="" alt="" className="widgets1Img" />
            <div className="widgets1User">
                <span className="widgets1Username">Anish Kumar Patel</span>
                <span className="widgets1UserTitle">Associate Developer</span>
            </div>
            <button className="widgets1Button">
                <VisibilityIcon className="widgets1Icon"/>
                Display
            </button>
        </li>
        <li className="widgets1ListItem">
            <img src="" alt="" className="widgets1Img" />
            <div className="widgets1User">
                <span className="widgets1Username">Anish Kumar Patel</span>
                <span className="widgets1UserTitle">Associate Developer</span>
            </div>
            <button className="widgets1Button">
                <VisibilityIcon className="widgets1Icon"/>
                Display
            </button>
        </li>
      </ul>
    </div>
  )
}
