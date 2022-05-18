import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import Register from './Register/Register';
import Login from './Login/Login';
import PostPicture from './PostPicture/PostPicture';
import Picture from './Picture/Picture';
import AuthenticationGoogle from './AuthenticationGoogle/AuthenticationGoogle'
import HomeAdmin from '../Admin/pages/HomeAdmin/HomeAdmin';
import Articles from '../Admin/pages/Articles/Articles';
import Users from '../Admin/pages/Users/Users';

class AppRouter extends React.Component {
	render() {
		return (
			<>
				<Switch>
					<Route exact path='/' component={Home}/>
					<Route path='/register' component={Register}/>
					<Route exact path='/login' component={Login}/>
					<Route exact path='/articles' component={Articles}/>
					<Route exact path='/users' component={Users}/>
					<Route path='/homeAdmin' component={HomeAdmin}/>
					<Route path='/pictures/new' component={PostPicture}/>
					<Route path='/pictures/:id' component={Picture}/>
					<Route path='/login/:provider/:token' component={AuthenticationGoogle}/>
				</Switch>
			</>
		)
	}
}

export default AppRouter;