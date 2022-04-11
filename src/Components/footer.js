import React from "react";

class Footer extends React.Component {
    render() {
        return(
            <div className="row">
                <div className="col-sm-4">
                    <div className="card ">

                        <div className="card-body">
                            <h5 class="card-title"  style={{color:'green'}}>Youth's Opinion</h5>
                            <p class="card-text">This website is really amazing. It gives very different dimesion to think.</p>
                            <a href="#" class="btn btn-primary">More Opinions</a>


                        </div>
                    </div>
                </div>    

             

        
                <div className="col-sm-4">
                    <div className="card ">

                        <div className="card-body">
                            <h5 class="card-title" style={{color:'red'}}>Collab with Us</h5>
                            <p class="card-text">More than 1 lakh students have collaborated with us.</p>
                            <a href="#" class="btn btn-success">More Opinions</a>


                        </div>
                    </div>
                </div>    

                <div className="col-sm-4">
                    <div className="card ">

                        <div className="card-body">
                            <h5 class="card-title" style={{color:'blue'}}>Our Partners</h5>
                            <p class="card-text">Rated as One of the biggest learning platform by our partners </p>
                            <a href="#" class="btn btn-danger">Scopes</a>


                        </div>
                    </div>
                </div>    
            </div>

            
            
           

        )
    }
}

export default Footer;