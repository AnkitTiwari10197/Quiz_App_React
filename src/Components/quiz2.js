import axios from "axios";
import React from "react";
import Quiz3 from "./quiz3";


class Quiz2 extends React.Component {

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
                <Quiz3 profession={profession}/>
            </div>


        )
    }
}


export default Quiz2;