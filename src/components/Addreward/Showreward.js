/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import "./Addreward.css";
import axios from 'axios';
export default class Showreward extends Component {

    deleteReward = () => {
        axios.delete('http://localhost:9999/delete-reward/' + this.props.obj._id)
        .then((res) =>{
            console.log('Place Successfully deleted');
        }).catch((error) => {
            console.log(error)
        })
    }
    
    render() {
        return (
            <div className='row'>
            <div className='col-4'>
                <h1 >First Reward</h1>
                <h2 >{this.props.obj.firstName}</h2>
                <div>
                    <img style={{ width: '30%' }} src={this.props.obj.firstUrl} />
                </div>
                <button className="button-status2" type="submit" onClick={this.deleteReward}>Delete</button> 

            </div>
            <div className='col-4'>
                <h1 >Second Reward</h1>
                <h2 >{this.props.obj.secondName}</h2>
                <div>
                    <img style={{ width: '30%' }} src={this.props.obj.secondUrl} />
                </div>
                <button className="button-status2" type="submit" onClick={this.deleteReward}>Delete</button> 

            </div>
            <div className='col-4'>
                <h1 >Third Reward</h1>
                <h2 >{this.props.obj.thirdName}</h2>
                <div>
                    <img style={{ width: '30%' }} src={this.props.obj.thirdUrl} />
                </div>
                <button className="button-status2" type="submit" onClick={this.deleteReward}>Delete</button> 

            </div>
            </div>
        )
    }
}
