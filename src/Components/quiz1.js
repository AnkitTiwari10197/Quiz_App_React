import axios from "axios";
import React from "react";
import Quiz from './quiz';



class Quiz1 extends React.Component {

    constructor(){
        super();
        this.state={
            profession:[]
        }
    }

    componentDidMount(){
        axios({
            url:"http://localhost:2022/profession/",
            method:'GET',
            headers:{"Content-Type": "application/json"}
        })
        .then(res => {this.setState({profession : res.data.professions})})
        .catch(error => console.log(error))
    }
    render(){
        const {profession} = this.state;
        return(
            <div>
                <Quiz profession={profession}/>
            </div>


        )
    }
}


export default Quiz1;