import { Component } from "react";


class Student extends Component{

    constructor(props){
        super();
        this.props=props;
    }

    render(){
        return(
            <>
          <p>{this.props.fname}</p>  
          <p> {this.props.lname}</p>
           <p>{this.props.birthday}</p>
           <img src={this.props.url} alt="" />
            
            
            </>
        )
    }
}

export default Student;