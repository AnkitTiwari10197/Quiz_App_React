import React from "react";
import Upper from "./upper";
import { Link } from "react-router-dom";
import Image10 from '../Images/Image10.jpg';

class About extends React.Component{

    render() {
        return(
            <>
            <Upper />
            
            <div className="container-fluid" >
                <div className="row">
                        <div className="col-sm-8 ">
                        <span><h3 style={{color:'#033E3E'}} >The Quizzer</h3>  is the all in one educations and quiz application where quizzes,careers and educations in different domains are lised out here. Now no need to waste time to go different portals
                        and search for the jobs as well as what to pursue.</span>
                        <i>In today's world, no one gonna tell you what should you do in your life. Everyone is having monetary aspect and in acheiving that somewwhere many youths are not followng their passion in which they can earn too  </i>
                    
                        <br/>
                        <br/>
                        <br/>
                        <h4 style={{color:'#00008B'}}>
                            <i>
                                Our Motto - <br/>
                            </i>
                        </h4>
                            <i style={{color:"red"}}>
            
                                To hold the student/youth in their passion from the very beginning and make them understand how to make money through that bcoz no one teaches that.
                                If all the forces would be put in right direction "India" would definielly reach new heights in terms of technology, nuclear power, basic infrastucture and economic-wise.

                            </i>

                            <hr/>

                            <div style={{textAlign:'center'}}>That's ALL Folks</div>

                            <hr/>
                            <br/>

                            <div  style={{textAlign:'center'}}>
                                <Link to="/" role ="button" className="btn btn-primary btn-sm" data-toggle="button" aria-pressed="true"> Back </Link>
                    
                            </div>     

                        </div>

                            

                        <div className="col-sm-4 ">
                            <img src={Image10} style={{height: '90%', width:'100%'}}/>


                        </div>
            
                </div>

            </div>
    
            </>

    
    )

        }
}

export default About;