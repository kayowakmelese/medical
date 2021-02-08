import React from 'react'
import { Container, Avatar, Accordion, AccordionDetails, AccordionSummary, Typography } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faSearch, faCircleNotch, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import loadData from '../controller/loadData'
import CardView from '../components/snippet/cardView'
import {Link} from 'react-router-dom'
import Headers from './snippet/Headers'
class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = ({ searchicon: faSearch, category: [],featured:[] })
    }

    changeicon() {
        this.setState({ searchicon: faCircleNotch })
    }

    async componentDidMount() {
        const resp = await loadData({}, "listCategory");
        const resp2=await loadData({},"recentItems")
        this.setState({ category: resp.data,featured:resp2.data })
        console.log(resp2.data)
    }

    render() {
        return <div>

           
            <Headers header="Company name" description="choose categories and subcategories or search using keys,tags and names"/>

            <Container>
                <div className="flex t-left left">
                    <ul> {this.state.category.map((data, index) => {
                        if (index <= this.state.category.length / 3) {
                            return <ShowAccordion index={index} length={this.state.category.length} name={data.name} subcategories={data.SubCategories} />
                        }else{
                            return null
                        }
                    })}
                    </ul>
                    <ul className="left">
                        {this.state.category.map((data, index) => {
                            if (index > this.state.category.length / 3 && index<=(this.state.category.length/3)*2) {
                               return <ShowAccordion index={index} length={this.state.category.length} name={data.name} subcategories={data.SubCategories} />
                            }else{
                                return null
                            }
                        })}
                    </ul>
                    <ul>
                        {this.state.category.map((data, index) => {
                            if (index > (this.state.category.length / 3)*2 ) {
                                
                                return <ShowAccordion index={index} length={this.state.category.length} name={data.name} subcategories={data.SubCategories} />
                            }else{
                                return null
                            }
                        })}
                    </ul>
                </div>
            </Container>

            <Container><h1>New Items</h1>
            <p className="liltext">new medical items added recently</p>
             </Container>
            <Container><ul className="w-100">
                        {
                            this.state.featured.map((data,index)=>{
                                let url="/detail/"+data.Item.id
                                const imageurl="http://localhost:355/pictures/"+data.ItemId+"photo1.jpg"
       
                                return <CardView url={url} name={data.Item.name} desc={data.Item.description} price={data.Item.ItemPrice.price} image={imageurl}/>
                            })
                           
                        }
                        </ul>
            </Container>
        </div>




    }
}
function showicon(len) {
    if (len > 0) {
        return <FontAwesomeIcon className="marginrit h-100 " color="#0d8ce0" icon={faChevronDown} style={{ width: '20px' }} />
    }
}


function ShowAccordion(props) {

    return <li className="w-100">
        <Accordion className="whitebg w-100 marginrit"  >
            <AccordionSummary>
                <Typography className="w-fitt">{props.name}</Typography> {showicon(props.subcategories.length)}
            </AccordionSummary>
            {props.subcategories.map((dat, index) => {
                const link="/subcategory/"+dat.id
                return <Link to={link}><AccordionDetails><p>{dat.name}</p></AccordionDetails></Link>
            })}
        </Accordion>
        
    </li>
}




export default Home