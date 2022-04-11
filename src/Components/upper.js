import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import App from '../Styles/App.css';
//import Login from './Login';

class Upper extends React.Component {

          
    render() {
    
        return (
            <div className= "container-fluid">
                <div className="row">
                    <nav className="navbar navbar-expand-lg navbar-light-grey bg-dark col-12">
                            <div className="col-sm-10">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#" style={{color:'white'}}>Home</a>
                                    </li>
                                    <li className="nav-item active">
                                        <Link to="/moreinfo" className="nav-link" style={{color:'white'}}> About </Link>
                                    </li>
                                    <li className="nav-item active">
                                        <a className="nav-link" href="https://www.facebook.com/" target="_blank" style={{color:'white'}}> Trends </a>
                                    </li>
                                    <li className="nav-item active">
                                        <Link to ="/career" className="nav-link" target="_blank" style={{color:'white'}}> Careers </Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                        <Link to="/login" className="btn btn-outline-primary mr-4" style={{color:'red'}}>Signin</Link>
                                    </li>    
                                    <li className="nav-item active">
                                        <Link to="/signup_page" className="btn btn-outline-warning " >Signup</Link>
                                        
                                    </li>
                                </ul>

                            </div>
                    </nav>
            </div>


            </div>
        )
    }
}
export default Upper;