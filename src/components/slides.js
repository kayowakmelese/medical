import React from 'react'
import {Button} from '@material-ui/core'
class Slides extends React.Component{

    componentDidMount(){

    }
    render(){
        return <center>  <div id="devil" className="w-80 slide-div" style={{backgroundImage:`url('${this.props.imageurl}')`,backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
        <div className="bottom-a padding"><h1>{this.props.name}</h1>
        <p>{this.props.desc}</p>
        <Button className="whitebg slide-btn">SEE MORE</Button>
        </div>
        </div></center>
    }
}

export default Slides