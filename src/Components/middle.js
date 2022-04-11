import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
//import App from '../Styles/App.css';

class Middle extends React.Component {
    constructor() {
        super();
        this.state={
            currentImage: 0,
            images: [
                "https://images.unsplash.com/photo-1591522810896-cb5f45acb9a1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3RhcnR1cHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
                "https://images.unsplash.com/photo-1564410267841-915d8e4d71ea?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aW5zcGlyYXRpb25hbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
                "https://images.unsplash.com/photo-1494178270175-e96de2971df9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aW5zcGlyYXRpb25hbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
                "https://images.unsplash.com/photo-1608999383953-d61f5d9c1ace?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGluc3BpcmF0aW9uYWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
                "https://images.unsplash.com/photo-1593341646782-e0b495cff86d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3JpY2tldHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
                "https://images.unsplash.com/photo-1564049489314-60d154ff107d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGdhbWluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
         
            ]

        }
    }
    switchImage =() => {
        if (this.state.currentImage < this.state.images.length - 1) {
          this.setState({
            currentImage: this.state.currentImage + 1
          });
        } else {
          this.setState({
            currentImage: 0
          });
        }
        return this.currentImage;
    }
    
    componentDidMount() {
        setInterval(this.switchImage, 3000);
    }
    
    render() {
        const myStyle={
            position: 'relative',
            top: '-400px',
            display: 'inline-block'
        }
      
        return (
        <div className="row">
            <div className="container-fluid" >
                <img 
                    src={this.state.images[this.state.currentImage]}
                    alt="cleaning images" style={{width:'100%', height:'650px'}}
                />

                
                    <div className="col-sm-6" style={myStyle}>
                    <div class="card text-center">
                        <div className="card ">

                            <div className="card-body">
                                <h5 class="card-title"  style={{color:'green'}}>Quiz 1</h5>
                                <p class="card-text">Attempt the first quiz now</p>
                                <Link to="/quiz" className="nav-link" class="btn btn-primary" style={{color:'white'}}> Start </Link>
                            </div>
                        </div>
                    </div>
                    </div>

                    <div className="col-sm-6" style={myStyle}>
                    <div class="card text-center">
                        <div className="card ">

                            <div className="card-body" >
                                <h5 class="card-title"  style={{color:'red'}}>Quiz 2</h5>
                                <p class="card-text">Attempt the Second quiz now</p>
                                <Link to="/quiz2" className="nav-link" class="btn btn-primary" style={{color:'white'}}> Start </Link>
                            </div>
                        </div>
                    </div>
                    </div>

                    
                </div>
            </div>
        
        )
    }
}

export default Middle;