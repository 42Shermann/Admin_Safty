import React, {Component} from "react";
import axios from "axios";
import { Link ,Route } from 'react-router-dom'
import logo from '../assets/images/logo_AOT.png'
import sidebar_items from '../../src/assets/JsonData/sidebar_routes.json'
import '../components/sidebar/Sidebar';
import SidebarItem from '../components/sidebar/SidebarItem';
import Topnav from '../components/topnav/TopNav'; 

export default class Edittask extends Component{
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            content: '',
            date: '',
            isFinished: '',
            desc: '',
            user: '',
            imgUrl: ''
    }
    }
    componentDidMount() {
        axios.get('http://localhost:9999/edit-place/' + this.props.match.params.id).then(res => {
            this.setState({
                title: res.data.title,
                content: res.data.content,
                date: res.data.date,
                isFinished: res.data.isFinished,
                desc: res.data.desc,
                user: res.data.user,
                imgUrl: res.data.imgUrl
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }
    onChangetital = (e) => {
        this.setState({ title: e.target.value})
    }
    onChangecontent = (e) => {
        this.setState({ content: e.target.value})
    }
    onChangedate = (e) => {
        this.setState({ date: e.target.value})
    }
    onChangeisFinished = (e) => {
        
        this.setState({ isFinished: e.target.value})
    }
    onChangedesc = (e) => {
        this.setState({ desc: e.target.value})
    }
    onChangeuser = (e) => {
        this.setState({ user: e.target.value})
    }
    onChangeimgUrl = (e) => {
        this.setState({ imgUrl: e.target.value})
    }


    onSubmit = (e) =>{
        e.preventDefault();

        const placeObject = {
            title: this.state.title,
            content: this.state.content,
            date: this.state.date,
            isFinished: this.state.isFinished,
            desc: this.state.desc,
            user: this.state.user,
            imgUrl: this.state.imgUrl
        };
        axios.put('http://localhost:9999/update-place/' + this.props.match.params.id, placeObject).then((res) => {
            console.log(res.data);
            console.log('Student Successfully Updated');
        }).catch((error) => {
            console.log(error)
        });

        // Redirect to task list
        this.props.history.push('/Alltask')
    }
    render(){
        return(
           
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
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="newUser">
                            <h2 className="newUserTitle">Edit PlaceZone Krab</h2>
            <form className="newUserForm" onSubmit={this.onSubmit}>
                <div className="newUserItem">
                    <label>Title</label>
                    <input type="text" placeholder="Title" value={this.state.title} onChange={this.onChangetital} required/>
                </div>
                <div className="newUserItem">
                    <label>Content</label>
                    <input type="text" placeholder="Content" value={this.state.content}  onChange={this.onChangecontent} required/>
                </div>
                <div className="newUserItem">
                    <label>Date</label>
                    <input type="text" placeholder="Date" value={this.state.date}  onChange={this.onChangedate} required/>
                </div>
                <div className="newUserItem">
                    <label>isFinished</label>
                    <input type="text" placeholder="Status" value={this.state.isFinished}  onChange={this.onChangeisFinished} required/>
                </div>
                <div className="newUserItem">
                    <label>Description</label>
                    <input type="text" placeholder="Description" value={this.state.desc}  onChange={this.onChangedesc} required/>
                </div>
                <div className="newUserItem">
                    <label>UserName</label>
                    <input type="text" placeholder="Name" value={this.state.user}  onChange={this.onChangeuser} required/>
                </div>
                <div className="newUserItem">
                    <label>Image</label>
                    <input type="text" placeholder="Image" value={this.state.imgUrl}  onChange={this.onimgUrl} required/>
                </div>

                <button className="button-status5" type="submit">Update</button>
            </form>
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

