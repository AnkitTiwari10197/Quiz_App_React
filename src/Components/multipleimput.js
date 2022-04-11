import React,{useState} from "react";


const MultipleInputs =() => {

    const [records, setRecords] = useState([]);

    const [initialState, setState]=useState({
        Fullname: "",
        email: "",
        number: "",
        Address: "",
        password: "",

    });

    const handleInput=(e)=>{
        let name= e.target.name;
        let value= e.target.value;

        setState(
            {...initialState, [name] : value}
        );
    
    }

    const mSubmit = (e)=> {
        e.preventDefault();
        const newrecords = {...initialState };
        setRecords ([...records, newrecords]);
        console.log(records);
        setState({  
        Fullname: " ",
        email: " ",
        number: " ",
        Address: " ",
        password: " ",});
    }

   

    return(
    
        <div style={{textAlign:'center'}}>
                <h4 className=" mt-3 mb-3"> Sign Up</h4>
            <div className="row">
            <div className="col-4"></div>
            <div className="col-5 " style={{backgroundColor:"burlywood"}}>
                    <form action="" onSubmit={mSubmit}>
                        <div>
                            <label htmlFor="Fullname"  className="mt-3 mb-3 mr-4">
                                Full Name:
                             </label>
                            <input autoComplete="off" type="text" name="Fullname" id="Fullname" placeholder="Enter your Name" onChange={handleInput} />
                        </div>

                        <div >
                            <label htmlFor="email"  className="mb-3 mt-2">
                               Email Address:
                            </label>
                            <input autoComplete="off" onChange={handleInput} type="email" name="email" id="email" placeholder="Enter your Email" />
                        </div>

                        <div >
                            <label htmlFor="number"  className="mb-3 mt-2 ">
                           
                                Phone/Mobile:

                            </label>
                            <input autoComplete="off" onChange={handleInput} type="number" name="number" id="number" placeholder="Enter your Mobile No" />
                        </div>

                        <div >
                            <label htmlFor="Address"  className="mb-3 mt-2 mr-4 ">
                                Address:
                            </label>
                            <input autoComplete="off" onChange={handleInput} type="text" name="Address" id="Address" placeholder="Enter your Address" />
                        </div>

                        <div>
                            <label htmlFor="password"  className="mb-3 mt-2 mr-4">
                                Password:
                            </label>
                            <input autoComplete="off" onChange={handleInput} type="password" name="password" id="password" placeholder="Enter your password" required />
                        </div>
                        <button className="mt-3" type="submit">
                            Proceed

                        </button>
                        <div>
                        Already have an account 
                    `   <a href="/login">click here</a>`
                        </div>
        
                    </form>

                    <div>
`                       {
                            records.map((items) => {
                                return(
                                        <>
                                        <span>{items.email}</span>
                                        <span>{items.Address}</span>
                                        <span>{items.number}</span>
                                        <span>{items.Fullname}</span>
                                        <span>{items.password}</span>
                                        </>

                                )
                            }
                            )}
                        
                    
                    </div>
                

            </div>
            
        </div>
    </div>


    )
}

export default MultipleInputs;