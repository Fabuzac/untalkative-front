import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
	
	constructor() {
		super();

		this.state = {
			token: null,
		};		
	}

	logout = () => {
		localStorage.setItem('token', '')
		localStorage.clear()
		this.setState({ token: null })
	}

	render() {
		return (
			<>
				<nav className="navbar navbar-expand-lg navbar-light bg-secondary">
					<div className="container-fluid nav-tabs">
						<Link className="navbar-brand h1 w-25" to="/">
							<img className='w-7 rounded-circle' src='/goo.png' alt='logo'></img>Website name
						</Link>			
						<div className="navbar-nav">
							{/* NAVBAR LEFT */}
							<ul className="navbar-nav">
								<li>
									<Link className="active" to="/">Home</Link>
								</li>
								<li>
									<Link className="active" to="/backadmin">Admin</Link>
								</li>
							</ul>
							{/* NAVBAR RIGHT */}
							<ul className="navbar-nav nav-tabs ml-auto">								
								{
									// IF LOGIN
									localStorage.getItem('token')
									// THEN
									?
										<>
											<li>
												<Link to="/pictures/new">Post picture</Link>
											</li>
											<li>
												<Link to="/" onClick={() => this.logout()}>Logout</Link>												
											</li>											
										</>										
									// ELSE	
									:
										<>
											<li>
												<Link to="/login">Login</Link>
											</li>
											<li>
												<Link to="/register">Registration</Link>
											</li>	
										</>							
								}																				
							</ul>
						</div>
					</div>
				</nav>
			</>
		)
	}
}

export default Navbar;