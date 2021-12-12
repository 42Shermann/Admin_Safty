import React, {Component} from 'react'
import "./Addplace.css";
import axios from 'axios';


export default class Addplace extends Component{
    
    constructor(props){
        super(props)
        this.state={
            ZoneID: '',
            ZoneName: '',
            Description: '',
            Active: ''
        }
    }
   

    onChangeZoneID = (e) => {
        this.setState({ ZoneID: e.target.value})
    }
    onChangeZoneName = (e) => {
        this.setState({ ZoneName: e.target.value})
    }
    onChangeDescription = (e) => {
        this.setState({ Desc: e.target.value})
    }
    onChangeActive = (e) => {
        
        this.setState({ Active: e.target.value})
    }

    onSubmit = (e) =>{
        e.preventDefault();

        const placeObject = {
            ZoneID: this.state.ZoneID,
            ZoneName: this.state.ZoneName,
            Desc: this.state.Desc,
            Active: this.state.Active
        };
        axios.post('http://192.168.1.40:3001/api/zone/create-place', placeObject).then(res => console.log(res.data));
        this.setState({
            ZoneID: '',
            ZoneName: '',
            Desc: '',
            Active: ''
        })
    }
    render() {
        
        return(
 
            <div>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="newUser">
                                <h2 className="newUserTitle">Add PlaceZone Krab</h2>
                <form className="newUserForm" onSubmit={this.onSubmit}>
                    <div className="newUserItem">
                        <label>Zone ID</label>
                        <input type="text" placeholder="zoneid" value={this.state.ZoneID} onChange={this.onChangeZoneID} required/>
                    </div>
                    <div className="newUserItem">
                        <label>Zone Name</label>
                        <input type="text" placeholder="zonename" value={this.state.ZoneName}  onChange={this.onChangeZoneName} required/>
                    </div>
                    
                    <div className="newUserItem">
                        <label>Description</label>
                        <input type="text" placeholder="description" value={this.state.Desc}  onChange={this.onChangeDescription} required/>
                    </div>
                   
                    <div className="newUserItem">
                        <label>Active</label>
                        <select className="newUserSelect" name="active" id="Active"  value={this.state.Active} onChange={this.onChangeActive}>
                        <option ket='1' value="Selected">Selected</option>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </select>
                    </div>
                    <button className="button-status5" type="submit">Create</button>
                </form>
            </div>
        </div>
    </div>
</div>
</div>
        )
    }
}

/*
<div>
<div className="row">
    <div className="col-12">
        <div className="card">
            <div className="newUser">
                <h2 className="newUserTitle">Add PlaceZone Krab</h2>
                <form className="newUserForm">
                    <div className="newUserItem">
                        <label>Zone ID</label>
                        <input type="text" placeholder="zoneid" />
                    </div>
                    <div className="newUserItem">
                        <label>Zone Name</label>
                        <input type="text" placeholder="zonename" />
                    </div>
                    
                    <div className="newUserItem">
                        <label>Description</label>
                        <input type="password" placeholder="description" />
                    </div>
                   
                    <div className="newUserItem">
                        <label>Active</label>
                        <select className="newUserSelect" name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <button className="newUserButton">Create</button>
                </form>
            </div>
        </div>
    </div>
</div>
</div>*/