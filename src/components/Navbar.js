import React from 'react';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
						<Link className="navbar-brand h1" to="/">Website name</Link>			
						<div className="collapse navbar-collapse" id="navbarColor01">
							{/* NAVBAR LEFT */}
							<ul className="nav nav-tabs navbar-nav me-auto">
								<li className="nav-item">
									<Link className="nav-link active" to="/">Home</Link>									
								</li>
								<li className='nav-item'>
									<Link className="nav-link active" to="/backadmin">Admin</Link>
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
											<li className="nav-item">
												<Link className="nav-link" to="/pictures/new">Post picture</Link>
											</li>
											<li className="nav-item">
												<Link className="nav-link" to="/" onClick={() => this.logout()}>Logout</Link>												
											</li>											
										</>										
									// ELSE	
									:
										<>
											<li className="nav-item">
												<Link className="nav-link nav-link" to="/login">Login</Link>
											</li>
											<li className="nav-item">
												<Link className="nav-link nav-link" to="/register">Registration</Link>
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