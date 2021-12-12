import React,{Component} from 'react'

import Table from 'react-bootstrap/Table';

//import customerList from '../assets/JsonData/customers-list.json'

import StatusCard from '../components/status-card/StatusCard'

import statusCards from '../assets/JsonData/status-card-data.json'

import Alltaskdetail from '../components/Alltaskdetail/Alltaskdetail'
import axios from 'axios';
import Showalltask from '../components/Showalltask/Showalltask';

export default class AllTask extends Component{
    constructor(props) {
        super(props);

        this.state = {
            place: []
        }
    }
    componentDidMount() {
        axios.get('http://192.168.1.40:3001/api/report')
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
           return <Showalltask obj={res} key={i} />
        })
    }
    render(){
    return (
        <div>
            <h1 className="page-header">
                All Task
            </h1>
            <div className="row">
                <div className="col-12">
                    <Alltaskdetail/>
                </div>
                {
                            statusCards.map((item, index) => (
                                <div className="col-3" key={index}>
                                    <StatusCard
                                        icon={item.icon}
                                        count={item.count}
                                        title={item.title}
                                    />
                                </div>
                            ))
                        }
            
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
    )
}
}
