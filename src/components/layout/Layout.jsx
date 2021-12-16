import React,{ useState } from 'react'
import './layout.css'
//import Sidebar from '../sidebar/Sidebar'
//import TopNav from '../topnav/TopNav'
//import Routes from '../Routes'
import { BrowserRouter, Route,Switch, Routes } from 'react-router-dom'
//import { useSelector, useDispatch } from 'react-redux'
//import ThemeAction from '../../redux/actions/ThemeAction'
import axios from 'axios';
import Dashboard from '../../pages/Dashboard'
import Alltask from '../../pages/AllTask'
import Employees from '../../pages/Employee'
import RewardV2 from '../../pages/RewardV2'
import Placezone from '../../pages/Placezone'
import Editplace from '../../pages/AdjustPlace/Editplace'
import Edittask from '../../pages/Edittask';
import Login   from '../../pages/Auth/Login'

import { AuthContext, DataContext } from '../../context/dataContext'
import api from '../api/api'


function Layout() {

    const [state, dispatch] = React.useReducer(
        (prevState, action) => {
          switch (action.type) {
            case 'RESTORE_TOKEN':
              return {
                ...prevState,
                userToken: action.token,
                userProfile: action.data,
                isLoading: false,
              };
            case 'SIGN_IN':
              return {
                ...prevState,
                isSignout: false,
                userToken: action.token,
                userProfile: action.data,
              };
            case 'SIGN_OUT':
              return {
                ...prevState,
                isSignout: true,
                userToken: null,
                userProfile: {
                  name:'',
                  username:'',
                  position:'',
                  phone:'',
                  email:''
                },
              };
            case 'UPDATE':
              return {
                ...prevState,
                userProfile: action.data,
                userToken: action.token,
              }
          }
        },
        {
          isLoading: true,
          isSignout: false,
          userToken: null,
          userProfile: {
            name:'',
            username:'',
            position:'',
            phone:'',
            email:''
          },
        }
      );

      const [data, setData] = useState({
        reports:[],
        AllTask:"",
        completed:'',
        incompleted:'',
        inProgress:''
      });

      const [Employee, setEmp] = useState([]);

      const fetchData = () =>{
        axios.get(`${api}/api/report/`)
        .then(function (response) {
          setData(response);
          fetchEmp();
          console.log(response.data);
          dispatch({ type: 'SIGN_IN', token: response.token, data: response.data });
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
      }

      const fetchEmp = () => {
        axios.get('http://192.168.1.40:3001/api/auth/getAllUsers')
        .then(res => {
              setEmp(res.data);
              console.log(res);
            })
        .catch((error) => {
            console.log(error)
        })
      }

      const authContext = React.useMemo(
        () => ({
    
          signIn: async data => {
            try{
            const login = await fetch(`${api}/api/auth/login`, {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                email: data.email,
                password: data.password
              })
            });
            
            const response = await login.json();
    
            if (response.success === true) {
              fetchData();
  
              return response;
            }
            else if (response.success === false){
              return response;
            };
          }catch(e){
            console.log(e);
          }
          },
    
          signOut: () => {
            dispatch({ type: 'SIGN_OUT' });
          },
        }),
        []
      );


    return (
        <AuthContext.Provider value={authContext}>
        <DataContext.Provider value={state}>
        <BrowserRouter>
          {state.userToken === null ?
          <Routes>
              <Route path='/' exact  element={<Login />}/>
          </Routes>    
          :
          <Routes>
              <Route index path='/'  element={<Dashboard place={data.data} emp={Employee}/>}/>
              <Route path='/alltask' element={<Alltask place={data.data} />}/>
              <Route path='/employee' element={<Employees />}/>
              <Route path='/Reward' element={<RewardV2 />}/>
              <Route path='/placezone' element={<Placezone />}/>
              <Route path='/Editplace/:id' element={<Editplace />}/>
              <Route path='/EditTask/:id' element={<Edittask />} />
          </Routes>
          }
        </BrowserRouter>
        </DataContext.Provider>
        </AuthContext.Provider>
    )
}

export default Layout