import React from 'react'
import {Container,Avatar} from '@material-ui/core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowDown} from '@fortawesome/free-solid-svg-icons'

class Headers extends React.Component{

    render(){
        return  <Container className="padding whitebg radius w-80 center top-part  ">
        <div className="">
        <img src="../homepage.jpg" className=""/>
        <div className="">
        <h1 className="h1">{this.props.header}</h1>
        <p className="h2">{this.props.description}</p>
        </div>
        </div>
        
       
        {/* <br></br>
        <Avatar className="active" ><FontAwesomeIcon icon={faArrowDown} /></Avatar> */}
    </Container>
    }
    
    
}

export default Headers