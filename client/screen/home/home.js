import React from "react";
import '../../assets/css/home/home.css';
import { withRouter } from 'react-router-dom'

class Home extends React.Component{

    constructor(props){
        super(props);
        this.home = this.home.bind(this);
    }

    home(){
        console.log("click home");
        this.props.history.push('/login')
    }

    render(){
        return(
            <div className="homeBackground" onClick={this.home}>
                HOME You are at {this.props.location.pathname}
            </div>
        );
    }
}

export default withRouter(Home);