import React from 'react'
import {Container,Avatar} from '@material-ui/core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowDown,faSearch,faClock,faGlobe} from '@fortawesome/free-solid-svg-icons'

class Headers extends React.Component{

    render(){
        return  <Container className="padding whitebg radius w-80 center top-part  ">
        <div className="flex ">
        <div className="t-rit top-part">
        <h1 className="headers cursive " style={{paddingBottom:'0px !important'}}>{this.props.header}</h1>
        <p className="h2 head-desc">{this.props.description}</p>
        <div className="flex br icons padding" >
            <div className="center margin-rit icon-hover"><FontAwesomeIcon icon={faSearch}  className=" big-icon"/><p className="">search intensively</p></div>
            <div className="center margin-rit icon-hover"><FontAwesomeIcon icon={faGlobe}  className=" big-icon"/><p className="">order Any equipments</p></div>
            <div className="center margin-rit icon-hover"><FontAwesomeIcon icon={faClock}  className=" big-icon"/><p className="">Fast Delivery</p></div>
     
        </div>
        </div>
        <img src="../something.jpg" className="hero " style={{float:'right'}}/>
        </div>
        
       
        {/* <br></br>
        <Avatar className="active" ><FontAwesomeIcon icon={faArrowDown} /></Avatar> */}
    </Container>
    }
    
    
}

export default Headers