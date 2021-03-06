import React,{Component} from 'react';
import axios from 'axios';
import './Addreward.css';
import Showreward from './Showreward'
import api from '../api/api';
export default  class Addreward extends Component {
    constructor(props){
        super(props);

        this.state={
            reward: []
        }
    }
    componentDidMount() {
        axios.get(`${api}/api/reward/listreward`)
             .then(res => {
                 this.setState({
                     reward: res.data
                 })
             }).catch((error) => {
                 console.log(error);
             })
    }
    Showdata =() => {
        return this.state.reward.map((res, i) => {
            return <Showreward obj={res} key={i} />
        })
    }
    render(){
 

        return(
            <div className="table-warpper">
                {this.Showdata()}
            </div>
        )
    
    } 

}