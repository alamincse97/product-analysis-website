import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../images/favicon.ico';
import './Header.css';


const Header = () => {

    // const [open, setOpen] = useState(false);

    //assigning location variable
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");
    return (
        <nav className='header p-0'>
            <div className='header p-0'>
                {/* <Link to="/">HOME</Link>
                <Link to="/reviews">REVIEWS</Link>
                <Link to="/dashboard">DASHBOARD</Link>
                <Link to="/blogs">BLOGS</Link>
                <Link to="/about">About</Link> */}
                {/* <div onClick={() => setOpen(!open)} className='menu d-md-none'>
                    {open ? <XIcon></XIcon> : <MenuAlt1Icon></MenuAlt1Icon>}
                </div> */}
                <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container">
    <a className="navbar-brand pe-5" href="#"><h3 className='fw-bold'><span className='text-danger'>MS</span> FURNITURE.</h3>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className={splitLocation[1] === "" ? "active" : ""}>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className={splitLocation[1] === "reviews" ? "active" : ""}>
                        <Link to="/reviews">REVIEWS</Link>
                    </li>
                    <li className={splitLocation[1] === "dashboard" ? "active" : ""}>
                        <Link to="/dashboard">DASHBOARD</Link>
                    </li>
                    <li className={splitLocation[1] === "blogs" ? "active" : ""}>
                        <Link to="/blogs">BLOGS</Link>
                    </li>
                    <li className={splitLocation[1] === "about" ? "active" : ""}>
                        <Link to="/about">About</Link>
                    </li>
      </ul>
    </div>
  </div>
</nav>
            </div>
        </nav>
    );
};



export default Header;