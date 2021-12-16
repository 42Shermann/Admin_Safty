import React, {useEffect} from 'react'

import { Link } from 'react-router-dom'

import Chart from 'react-apexcharts'
import { Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'

import StatusCard from '../components/status-card/StatusCard'

import Badge from '../components/badge/Badge'


import statusCards from '../assets/JsonData/status-card-data.json'

import logo from '../assets/images/logo_AOT.png'
import sidebar_items from '../../src/assets/JsonData/sidebar_routes.json'
import '../components/sidebar/Sidebar';
import SidebarItem from '../components/sidebar/SidebarItem';
import Topnav from '../components/topnav/TopNav'; 

const chartOptions = {
    series: [{
        name: 'Task Completed',
        data: [40,70,20,90,36,80,30,91,60]
    }, {
        name: 'Task in-completed',
        data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10]
    }],
    options: {
        color: ['#6ab04c', '#2980b9'],
        chart: {
            background: 'transparent'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
        },
        legend: {
            position: 'top'
        },
        grid: {
            show: false
        }
    }
}

const topCustomers = {
    head: [
        'user',
        'taskID',
        'taskprocess'
    ],
    body: [
        {
            "username": "john doe",
            "order": "490",
            "price": "$15,870"
        },
        {
            "username": "frank iva",
            "order": "250",
            "price": "$12,251"
        },
        {
            "username": "anthony baker",
            "order": "120",
            "price": "$10,840"
        },
        {
            "username": "frank iva",
            "order": "110",
            "price": "$9,251"
        },
        {
            "username": "anthony baker",
            "order": "80",
            "price": "$8,840"
        }
    ]
}

const renderCusomerHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderCusomerBody = (item, index) => (
    <tr key={index}>
        <td>{item.username}</td>
        <td>{item.order}</td>
        <td>{item.price}</td>
    </tr>
)

const latestOrders = {
    header: [
        "Task id",
        "Topic",
        "User",
        "date",
        "status"
    ],
    body: [
        {
            id: "#OD1711",
            user: "john doe",
            date: "17 Jun 2021",
            price: "$900",
            status: "progress"
        },
        {
            id: "#OD1712",
            user: "frank iva",
            date: "1 Jun 2021",
            price: "$400",
            status: "completed"
        },
        {
            id: "#OD1713",
            user: "anthony baker",
            date: "27 Jun 2021",
            price: "$200",
            status: "In-Completed"
        },
        {
            id: "#OD1712",
            user: "frank iva",
            date: "1 Jun 2021",
            price: "$400",
            status: "In-Completed"
        },
        {
            id: "#OD1713",
            user: "anthony baker",
            date: "27 Jun 2021",
            price: "$200",
            status: "progress"
        }
    ]
}

const orderStatus = {
    "shipping": "primary",
    "progress": "warning",
    "completed": "success",
    "In-Completed": "danger"
}

const renderOrderHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderOrderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.user}</td>
        <td>{item.price}</td>
        <td>{item.date}</td>
        <td>
            <Badge type={orderStatus[item.status]} content={item.status}/>
        </td>
    </tr>
)

const Dashboard = ({place, emp}) => {

    const themeReducer = useSelector(state => state.ThemeReducer.mode)

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

                        <h1 className="page-header">Overview</h1>
                        <div className="row">
                            <div className="col-12">
                            <div className='row'>
                
                <div className='col-3'>
                <div className='status-card'>
                        <div className="status-card__info">
                            <h4>{place.AllTask}</h4>
                            <h3>All Task</h3>
                        </div>
                </div>
                </div>

                <div className='col-3'>
                <div className='status-card'>
                        <div className="status-card__info">
                            <h4>{place.completed}</h4>
                            <h3>Completed</h3>
                        </div>
                </div>
                </div>

                <div className='col-3'>
                <div className='status-card'>
                        <div className="status-card__info">
                            <h4>{place.incompleted}</h4>
                            <h3>Incomplete</h3>
                        </div>
                </div>
                </div>

                <div className='col-3'>
                <div className='status-card'>
                        <div className="status-card__info">
                            <h4>{place.inProgress}</h4>
                            <h3>In Progress</h3>
                        </div>
                </div>
                </div>

                </div> 
                            </div>
                            <div className="col-12">
                                <div className="card full-height">
                                    {/* chart */}
                                    <Chart
                                        options={themeReducer === 'theme-mode-dark' ? {
                                            ...chartOptions.options,
                                            theme: { mode: 'dark'}
                                        } : {
                                            ...chartOptions.options,
                                            theme: { mode: 'light'}
                                        }}
                                        series={chartOptions.series}
                                        type='line'
                                        height='100%'
                                    />
                                </div>
                            </div>
    
                            <div className="col-6">
                                <div className="card">
                                    <div className="card__header">
                                        <h3>Recent Activity</h3>
                                    </div>
                                    <div className="card__body">
                                    <Table>
                                        <thead>
                                            <tr>
                                            <th>Topic</th>
                                            <th>Location</th>
                                            <th>Date</th>
                                            <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {place.reports.slice(0, 5).map(item =>(
                                                <tr key={item.id}>
                                                    <td>{item.title}</td>
                                                    <td>{item.content}</td>
                                                    <td>{item.date}</td>
                                                    <td>{item.isFinished}</td>
                                                </tr>
                                            ))
                                            }
                                        </tbody>
                                        </Table>
                                    </div>
                                    <div className="card__footer">
                                        <Link to='/alltask/'>view all</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="card">
                                    <div className="card__header">
                                        <h3>Employees</h3>
                                    </div>
                                    <div className="card__body">
                                    <Table>
                                        <thead>
                                            <tr>
                                            <th>Name</th>
                                            <th>Position</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {emp.slice(0, 7).map(item =>(
                                                <tr key={item.id}>
                                                    <td>{item.name}</td>
                                                    <td>{item.position}</td>
                                                </tr>
                                            ))
                                            }
                                        </tbody>
                                        </Table>
                                    </div>
                                    <div className="card__footer">
                                        <Link to='/employee/'>view all</Link>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    </div>  

                    </div> 

    )  
}

export default Dashboard
