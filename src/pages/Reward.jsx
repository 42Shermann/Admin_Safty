import React, { Component } from 'react';
import axios from 'axios';
import "./Pagelayout.css";

//import Table from '../components/table/Table'

import Addreward from '../components/Addreward/Addreward'



export default class Reward extends Component {
    constructor() {
        super()
        this.state = {
            files: '',
            Name: '',
            Stock: '',
            Sequence: '',
            Active: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }


    handleInputChange(event) {
        let files = event.target.files;
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);

        reader.onload = (e) => {

            this.setState({
                files: e.target.result,
            })
        }

    }
    onChangeName = (e) => {
        this.setState({ Name: e.target.value })
    }
    onChangeStock = (e) => {
        this.setState({ Stock: e.target.value })
    }
    onChangeSequence = (e) => {
        this.setState({ Sequence: e.target.value })
    }
    onChangeActive = (e) => {
        this.setState({ Active: e.target.value })
    }
    onSubmit = (e) => {
        e.preventDefault();

        const rewardObject = {
            files: this.state.files,
            Name: this.state.Name,
            Stock: this.state.Stock,
            Sequence: this.state.Sequence,
            Active: this.state.Active
        };

        axios.post('http://localhost:9999/create-reward', rewardObject).then(res => console.log(res.data));

        this.setState({
            files: '',
            Name: '',
            Stock: '',
            Sequence: '',
            Active: ''
        })
    }
    render() {
        return (
            <div>
                <h1 className="page-header">
                    Reward
                </h1>
                <div className="row">
                    <div className="col-4">
                        <div className="card "  >
                            <div className="newProduct">
                                <h1 className="addProductTitle">Add Reward</h1>
                                <form className="addProductForm" onSubmit={this.onSubmit}>
                                    <div className="addProductItem">
                                        <label>Select File:</label>
                                        <input type="file" className="form-control" name="upload_file" onChange={this.handleInputChange} />
                                    </div>
                                    <div className="addProductItem">
                                        <label>Name</label>
                                        <input type="text" placeholder="Reward Name" value={this.state.Name} onChange={this.onChangeName} required />
                                    </div>
                                    <div className="addProductItem">
                                        <label>Stock</label>
                                        <input type="text" placeholder="Quantity" value={this.state.Stock} onChange={this.onChangeStock} required />
                                    </div>
                                    <div className="addProductItem">
                                        <label>Sequence</label>
                                        <select name="number" id="number" value={this.state.Sequence} onChange={this.onChangeSequence} >
                                            <option value="Selected">Selected</option>
                                            <option value="1st"> 1st</option>
                                            <option value="2nd"> 2nd</option>
                                            <option value="3rd"> 3rd</option>
                                        </select>
                                    </div>
                                    <div className="addProductItem" value={this.state.Active} onChange={this.onChangeActive} >
                                        <label>Active</label>
                                        <select name="active" id="active">
                                            <option value="Selected">Selected</option>
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                        </select>
                                    </div>
                                    <div className="reward">
                                        <button className="button-status4" type="submit">Create</button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>

                    <div className="col-12">
                        <div className="card">
                            <div className="card__body">

                                <Addreward />

                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }

}
