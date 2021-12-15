import React,{Component} from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom'
//import customerList from '../assets/JsonData/customers-list.json'

import StatusCard from '../components/status-card/StatusCard'

import statusCards from '../assets/JsonData/status-card-data.json'

import Alltaskdetail from '../components/Alltaskdetail/Alltaskdetail'
import axios from 'axios';
import Showalltask from '../components/Showalltask/Showalltask';

import logo from '../assets/images/logo_AOT.png'
import sidebar_items from '../../src/assets/JsonData/sidebar_routes.json'
import '../components/sidebar/Sidebar';
import SidebarItem from '../components/sidebar/SidebarItem';
import Topnav from '../components/topnav/TopNav'; 


export default class AllTask extends Component{
    constructor(props) {
        super(props);

        this.state = {
            place: {
                reports:[],
                AllTask:"",
                completed:'',
                incompleted:'',
                inProgress:''
            }
        }
    }
 
    DataTable = () =>{
        
       return this.props.place.reports.map((res, i) => {
           return <Showalltask obj={res} key={i} />
        })
    }
    render(){
    return (
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

            <h1 className="page-header">
                All Task
            </h1>
            <div className="row">
                <div className="col-12">
                    <Alltaskdetail/>
                </div>
                <div className='row'>
                
                <div className='col-3'>
                <div className='status-card'>
                        <div className="status-card__info">
                            <h4>{this.props.place.AllTask}</h4>
                            <h3>All Task</h3>
                        </div>
                </div>
                </div>

                <div className='col-3'>
                <div className='status-card'>
                        <div className="status-card__info">
                            <h4>{this.props.place.completed}</h4>
                            <h3>Completed</h3>
                        </div>
                </div>
                </div>

                <div className='col-3'>
                <div className='status-card'>
                        <div className="status-card__info">
                            <h4>{this.props.place.incompleted}</h4>
                            <h3>Incomplete</h3>
                        </div>
                </div>
                </div>

                <div className='col-3'>
                <div className='status-card'>
                        <div className="status-card__info">
                            <h4>{this.props.place.inProgress}</h4>
                            <h3>In Progress</h3>
                        </div>
                </div>
                </div>

                </div> 
                <div className='row'>      
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <Table
                                limit='10'
                            />
                             <thead>
                            <tr>
                                <th> Title </th>
                                <th> Content </th>
                                <th> date </th>
                                <th> isFinished </th>
                                <th> desc </th>
                                <th> user </th>
                                <th> Action </th>
                            </tr>
                            </thead>
                            <tbody>
                                {this.DataTable()}
                            </tbody>
                        </div>
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
