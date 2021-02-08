import React from 'react'
import loadData from '../controller/loadData'
import {Breadcrumbs, Container,Button} from '@material-ui/core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faDollarSign,faTag} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import BreadCrumbs from './snippet/BreadCrumbs'
class Detail extends React.Component{
    constructor(props){
        super(props)
        this.state=({
            data:[],loaded:false,imageurl:""
        })
    }

    changeImage(url){
        this.setState({imageurl:url})
    }
    

    async componentDidMount(){
        const resp=await loadData({id:this.props.match.params.id},"loadDetail")
        const imageurl="http://localhost:355/pictures/"+resp.data.id+"photo1.jpg"
        console.log(resp.data)
        this.setState({loaded:true,data:resp.data,imageurl:imageurl})

    }

    render(){
        if(this.state.loaded){
            const cat="/category/"+this.state.data.Product.SubCategory.Category.id
            const subcat="/subcategory/"+this.state.data.Product.SubCategory.id
            const product="/product/"+this.state.data.Product.id
            const items=[]
            for(let i=1;i<=this.state.data.photos;i++){
                const imageurl="http://localhost:355/pictures/"+this.state.data.id+"photo"+i+".jpg"
                items.push( <div className="thumbnail" style={{background:`url("${imageurl}") 0% 0% / cover`}} onMouseOver={()=>{this.changeImage(imageurl)}}></div>)
            }



            return <Container className="top-part w-80">
            <BreadCrumbs links={[
                {link:cat,
                name:this.state.data.Product.SubCategory.Category.name
            
            },{
               link:subcat,
               name: this.state.data.Product.SubCategory.name
            },{
                link:product,
                name:this.state.data.Product.name
            },{
                link:"#",
                name:this.state.data.name
            }]}/>
            
            <Container className="   radius w-80 padding-0 ">
            <div className="flex">
            <div className="whitebg w-50 marginrit radius ">
                <div className="radius detail-image" style={{background:`#ddd url("${this.state.imageurl}") no-repeat center /contain`,height:'400px',}}></div>
                <div className="flex">
            {items}
            </div>
           
                </div>  <div className="whitebg padding w-50 radius" style={{position:'relative'}}>
                    <h1>{this.state.data.name}</h1>
                    <p className="liltext">{this.state.data.description}</p>
                    <br></br>
                    <div className="flex">
                    {
                        this.state.data.ItemTags.map((dat,i)=>{
                            return  <div className="flex marginrit"><FontAwesomeIcon className="" color="gray" icon={faTag}/><p className="liltext"><b>{dat.Tag.name}</b></p></div>
                        })
                    }
                    </div>
                    <br></br>
                   
                    <br></br>
                    <div className="flex">
                <FontAwesomeIcon className="h-100 " style={{width:'25px',marginRight:'3px'}} icon={faDollarSign} color="lightgray"/><h1 className="" style={{color:'black',textShadow:'none'}}>{this.state.data.ItemPrice.price}</h1><p className="liltext" style={{color:'gray'}}><b>ETB</b></p>
                </div>
                <br></br><br></br>
                <Button className="active w-90 morepadding radius p-bottom">CONTACT SELLER</Button>
                   
                </div>
                </div>
                </Container>
                 <Container>
                
               
                </Container>
            </Container>
        }else{
            return <Container>Can't Find Items</Container>
        }
        
    }
}
 

export default Detail