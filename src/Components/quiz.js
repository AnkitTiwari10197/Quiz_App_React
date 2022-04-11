import React from 'react';
import '../Styles/App.css';



class Quiz extends React.Component {



    render() {
        const{profession} = this.props;
        
        
        return(
            <div className= "container">
                <div className='main_div'>
                    
                        
                    
                        
                        {profession.map((items)=> {
                            return <>
                                <h2 className='question'>{items.question}</h2>
                                <ul className='content'>
                                <li>
                                    <input type="radio" name='answer' id='ans1' required/>
                                    <label id='opt1'>{items.option1}</label>
                                </li>
                                <li>
                                    <input type="radio" name='answer' id='ans2' required/>
                                    <label id='opt2'>{items.option2}</label>
                                </li>
                                <li>
                                    <input type="radio" name='answer' id='ans3' required/>
                                    <label id='opt3'>{items.option3}</label>
                                </li>
                                <li>
                                    <input type="radio" name='answer' id='ans4' required/>
                                    <label id='opt4'>{items.option4}</label>
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

export default Quiz;