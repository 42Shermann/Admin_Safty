import React, {Component} from "react";
import axios from "axios";
import api from "../../components/api/api";

export default class Editplace extends Component{
    constructor(props) {
        super(props);

        this.state = {
            ZoneID: '',
            ZoneName: '',
            Desc: '',
            Active: ''
        }
    }

    componentDidMount() {
        axios.get(`${api}/api/zone/edit-place/${this.props.match.params.id}`).then(res => {
            this.setState({
                ZoneID: res.data.ZoneID,
                ZoneName: res.data.ZoneName,
                Desc: res.data.Desc,
                Active: res.data.Active
            })
        })
        .catch((error) => {
            console.log(error)
        })
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
        axios.put('http://localhost:9999/update-place/' + this.props.match.params.id, placeObject).then((res) => {
            console.log(res.data);
            console.log('Student Successfully Updated');
        }).catch((error) => {
            console.log(error)
        });

        // Redirect to student list
        this.props.history.push('/PlaceZone')
    }
    render(){
        return(
            <div>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="newUser">
                            <h2 className="newUserTitle">Edit PlaceZone Krab</h2>
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
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
                <button className="button-status5" type="submit">Update</button>
            </form>
        </div>
    </div>
</div>
</div>
</div>
        )
    }
}

