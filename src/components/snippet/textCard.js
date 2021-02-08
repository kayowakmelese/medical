import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import {Button,Avatar} from '@material-ui/core'

class TextCard extends React.Component{

    render(){ 
        let namess=this.props.name
        return <Link to={this.props.link} ><div className="h-300 br li card-div card-hover w-20 whitebg padding radius">
            <Avatar className="r-5">{namess.charAt(0)}</Avatar>
            <p className="h2">{this.props.name}</p>
            <p className="liltext">{descriptiontext(this.props.description)}</p>
            <Button className="btn  b-circle gray br"><p className="marginrit">See Detail</p><FontAwesomeIcon className="" icon={faArrowRight}/></Button>
        </div></Link>
    }
}

function descriptiontext(desc){
    desc=desc+""
   if(desc.length>100){
       return (desc.slice(0,100)+"...")
   }else{
       return desc;
   }
}


export default TextCard
