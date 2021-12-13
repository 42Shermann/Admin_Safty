import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Alltask from '../pages/AllTask'
import Employees from '../pages/Employee'
import Reward from '../pages/Reward'
import Placezone from '../pages/Placezone'
import Editplace from '../pages/AdjustPlace/Editplace'
import RewardV2 from '../pages/RewardV2'


const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/alltask' component={Alltask}/>
            <Route path='/employee' component={Employees}/>
            <Route path='/Reward' component={RewardV2}/>
            <Route path='/placezone' component={Placezone}/>
            <Route path='/editplace/:id' component={Editplace}/>
        </Switch>
    )
}

export default Routes
