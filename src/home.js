import React from 'react';
import Upper from './Components/upper';
import Middle from './Components/middle';
import Footer from'./Components/footer';
import login from './Components/Login';


class Home extends React.Component {
    render() {
        return (
            <div>
                <Upper/>
                <Middle/>
                <Footer/>
            </div>
            
        )
    }
}
export default Home;