import React from 'react';
import '../Styles/App.css';



class Quiz3 extends React.Component {

    constructor(){
        super();
        this.state={
            count:0
        }
    }
    Handle = () => {
        this.setState({count: this.state.count + 1});
    
    }

    render() {
        const{profession} = this.props;
        
        
        return(
            <div className= "container">
                <div className='main_div'>
                    
                        
                    
                        
                        {profession.map((items)=> {
                            return <>
                                <h2 className='question'>{items.ques}</h2><ul className='content'>
                                <li>
                                    <input type="radio" name='answer' id='ans1' required />
                                    <label id='opt1'>{items.opt1}</label>
                                </li>
                                <li>
                                    <input type="radio" name='answer' id='ans1' required/>
                                    <label id='opt1'>{items.opt2}</label>
                                </li>
                                <li>
                                    <input type="radio" name='answer' id='ans1' required/>
                                    <label id='opt1'>{items.opt3}</label>
                                </li>
                                <li>
                                    <input type="radio" name='answer' id='ans1' required/>
                                    <label id='opt1'>{items.opt4}</label>
                                </li>

                            </ul>
                            </>
                            
                        })
                    
                        
                        }
                
                
                <button type='submit' id='submit' onSubmit={this.Handle} style={{marginBottom: '100px', marginTop:'100px'}}>Submit</button>
                <div className='scoreArea'>
               

                </div>
                </div>
                


                
                
    
                
            </div>

         
               
        )

        

    }


        



}

export default Quiz3;