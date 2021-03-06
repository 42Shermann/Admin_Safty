import React, {Component} from 'react'

import Table from 'react-bootstrap/Table';
import axios from 'axios';
import EmployeeTableRow from '../components/EmployeeTableRow'
//import customerList from '../assets/JsonData/customers-list.json'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo_AOT.png'
import sidebar_items from '../../src/assets/JsonData/sidebar_routes.json'
import '../components/sidebar/Sidebar';
import SidebarItem from '../components/sidebar/SidebarItem';
import Topnav from '../components/topnav/TopNav'; 

import '../components/table/table.css'
import api from '../components/api/api';
export default class  Employee extends Component {

    constructor(props) {
        super(props);

        this.state = {
            employee: []
        }
    }
    componentDidMount() {
        axios.get(`${api}/api/auth/getAllUsers`)
             .then(res => {
                 this.setState({
                     employee: res.data
                 })
             })
             .catch((error) => {
                 console.log(error)
             })
    }
    DataTable = () =>{
        
       return this.state.employee.map((res, i) => {
           return <EmployeeTableRow obj={res} key={i} />
        })
    }

    render() {
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


            <h1> Employee</h1>
            <div className="table-warpper card">
            
                 <Table  limit='10' >
                    <thead>
                        <tr>
                            <th> Name </th>
                            <th> UserName </th>
                            <th> Email </th>
                            <th> Position </th>
                            <th> Phone </th>
                            <th> Action </th>
                            
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

        )
    }
}





/*const customerTableHead = [
    '',
    'name',
    'email',
    'phone',
    'total orders',
    'total spend',
    'location'
]

const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.total_orders}</td>
        <td>{item.total_spend}</td>
        <td>{item.location}</td>
    </tr>
)

const Employee = () => {
    return (
        <div>
            <h1 className="page-header">
                Employees
            </h1>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <Table
                                limit='10'
                                headData={customerTableHead}
                                renderHead={(item, index) => renderHead(item, index)}
                                bodyData={customerList}
                                renderBody={(item, index) => renderBody(item, index)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Employee*/
