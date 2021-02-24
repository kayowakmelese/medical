import React from 'react'
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch,faDice,faCircleNotch,faSpinner,faHome,faPager} from '@fortawesome/free-solid-svg-icons'
import { Button,Paper, TextField,FormControl,InputLabel,InputAdornment,BottomNavigation,BottomNavigationAction } from '@material-ui/core'
import Home from './components/Home'
import Search from './components/Search'
import Magazine from './components/Magazine'
import Detail from './components/Detail'
import ListCategory from './components/ListCategory'
import ListSubCategory from './components/ListSubCategory'
import ListProduct from './components/ListProduct'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
class App extends React.Component {
  constructor(props){
    super(props)
    this.state=({searchicon:faSearch,searchkey:"",bar:"home"})
  }

  changeicon(event){

    let keys=document.getElementById('searchkey').value
      this.setState({searchicon:faSearch,searchkey:keys})
    
    


  }
  setBar(value){
    this.setState({bar:value})
  }
  render() {
    let link="/search/"+this.state.searchkey
    return <BrowserRouter>
    <div className="w-100 navbar-mobile">
      <BottomNavigation value={this.state.bar} onChange={(event,newval)=>{this.setBar(newval)}}>
        <BottomNavigationAction value="home" label="homepage" icon={<Link to="/home"><FontAwesomeIcon icon={faHome}/></Link>}/>
        <BottomNavigationAction value="magazine" label="Magazine" icon={<Link to="/magazine"> <FontAwesomeIcon icon={faPager}/></Link>}/>
        <BottomNavigationAction value="search" label="Search" icon={<Link to="/search"><FontAwesomeIcon icon={faSearch}/></Link>}/>
      </BottomNavigation>
    </div>
      <div className="navbar whitebg   flex">
        <div><img className="logo " src="../logo-8.svg" /></div>
          <div className="padding"><Link to="/home"><li   className="padding b  radius li"><p>Homepage</p></li></Link></div>
          
          <div className="padding"><Link to="/magazine"><li className="padding  radius li" >Magazine</li>  </Link> </div>    
          


      <div className=" padding w-30">
      <div className="border flex" style={{padding:'5px'}}>
               <input className="padding b-none fullwidth" id="searchkey" type="text" placeholder="search items" onChange={(e)=>{this.changeicon(e)}}/><Link to={link}><FontAwesomeIcon id="search" className="h-100 marginrit" icon={this.state.searchicon}/></Link>
               </div>
               
               </div>
            
        </div>
        
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/search/:key" >
          <Search keys={this.state.searchkey}/>
        </Route>
        <Route path="/magazine" component={Magazine} />
        <Route path="/detail/:id" component={Detail}/>
        <Route path="/category/:id" component={ListCategory}/>
        <Route path="/subcategory/:id" component={ListSubCategory}/>
        <Route path="/product/:id" component={ListProduct}/>
      </Switch>
    </BrowserRouter>


  }
}
export default App;
