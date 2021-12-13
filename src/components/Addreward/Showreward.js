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

            <div>
                <h1 >{this.props.obj.Sequence} </h1>
                <h2 >{this.props.obj.Name}</h2>
                <div>
                    <img style={{ width: '30%' }} src={this.props.obj.url} />
                </div>
                <h4>Stock: {this.props.obj.Stock}  Active: {this.props.obj.Active}</h4>
                <button className="button-status2" type="submit" onClick={this.deleteReward}>Delete</button> 

            </div >
        )
    }
}
