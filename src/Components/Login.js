import React from "react";

class Login extends React.Component {
    
    render() {
        return(
            <div className="card text-center">
                <div className="card-header">
                    <h3>Login Page</h3>
                    <div className="card-body">
                            <form>
                            <label className="mr-3 pl-1" >Email</label>
                            <input type="text"className="ml-3" />
                            <br/>
                            <label>Password</label>
                            <input type="password" className="ml-2" required/>
                            <br/>
                            <button class="btn btn-primary ml-5">login</button>
                            </form>
                    </div>
                </div>

            </div>

        )
    }

}
export default Login;