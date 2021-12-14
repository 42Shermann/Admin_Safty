import React,{Component} from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Addplace from '../components/Addplace/Addplace'
import PlaceTableRow from '../components/Addplace/PlaceTableRow';
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo_AOT.png'
import sidebar_items from '../../src/assets/JsonData/sidebar_routes.json'
import '../components/sidebar/Sidebar';
import SidebarItem from '../components/sidebar/SidebarItem';
import Topnav from '../components/topnav/TopNav'; 

export default class Placezone extends Component {
    constructor(props) {
        super(props);

        this.state = {
            place: []
        }
    }
    componentDidMount() {
        axios.get('http://192.168.1.40:3001/api/zone')
             .then(res => {
                 this.setState({
                     place: res.data
                 })
             })
             .catch((error) => {
                 console.log(error)
             })
    }
    DataTable = () =>{
        
       return this.state.place.map((res, i) => {
           return <PlaceTableRow obj={res} key={i} />
        })
    }
    render(){
        return(
            <div>




<div className="layout__content">
                      
        <div className="layout__content-main">
        <Topnav />
        <div className='sidebar'>
            <div className="sidebar__logo">
                <img src={logo} alt="company logo" />
            </div>
            {
                sidebar_items.map((item, index) => (
                    <Link to={item.path} key={index}>
                        <SidebarItem
                            title={item.display_name}
                            icon={item.icon}
                            
                        />
                    </Link>
                ))
            }
        </div>




                <h1> PlaceZone</h1>
                <div className="row">
                     <Addplace/>
                     <div className="col-12">
                        <div className="card">
                            <div className="card__body">
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th> ZoneID</th>
                                            <th> ZoneName</th>
                                            <th> Description</th>
                                            <th> Active</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.DataTable()}
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
            </div>  

</div>  
        )
}

}











