import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import BackAdmin from '../Admin/pages/BackAdmin/BackAdmin';
import PostPicture from './PostPicture';
import Picture from './Picture';
import AuthenticationGoogle from './AuthenticationGoogle'

class AppRouter extends React.Component {
	render() {
		return (
			<>
				<Switch>
					<Route exact path='/' component={Home}/>
					<Route path='/register' component={Register}/>
					<Route exact path='/login' component={Login}/>
					<Route path='/backadmin' component={BackAdmin}/>
					<Route path='/pictures/new' component={PostPicture}/>
					<Route path='/pictures/:id' component={Picture}/>
					<Route path='/login/:provider/:token' component={AuthenticationGoogle}/>
				</Switch>
			</>
		)
	}
}

export default AppRouter;