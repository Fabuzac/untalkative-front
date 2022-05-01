import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import Register from './Register/Register';
import Login from './Login/Login';
import BackAdmin from '../Admin/pages/BackAdmin/BackAdmin';
import PostPicture from './PostPicture/PostPicture';
import Picture from './Picture/Picture';
import AuthenticationGoogle from './AuthenticationGoogle/AuthenticationGoogle'

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