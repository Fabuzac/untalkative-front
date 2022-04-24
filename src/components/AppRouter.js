import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import BackAdmin from '../Admin/pages/BackAdmin/BackAdmin';

class AppRouter extends React.Component {
	render() {
		return (
			<>
				<Switch>
					<Route exact path='/' component={Home}/>
					<Route path='/register' component={Register}/>
					<Route path='/login' component={Login}/>
					<Route path='/backadmin' component={BackAdmin}/>
				</Switch>
			</>
		)
	}
}

export default AppRouter;