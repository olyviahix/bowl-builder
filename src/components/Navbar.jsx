import {Link} from 'react-router-dom';
import nav from '../CSS/Navbar.css'

const Navbar = () =>{
    return(
        <div class='nav'>
            
            <Link to="/">Home</Link>
            <Link to="/ContactUs">Contact Us</Link>
            <Link to="/LeanFeast">LeanFeast Builder</Link>
            <Link to="/Extras">Extras</Link>
        </div>
    )
}

export default Navbar;