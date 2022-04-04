import './navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
     <div className="nav-container">
        
        <div className="nav-heading">
            Leaderboard
        </div>
        <div className="nav-links">
        <div className="nav-home">
         <Link to='/'>Home</Link>    
        </div>
        <div className="nav-add">
         <Link to='/add'>Add</Link> 
        </div>
        </div>
    </div> );
}
 
export default Navbar