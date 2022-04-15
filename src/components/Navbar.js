import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {

	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<>
				<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
					<div className="container-fluid">
						<Link className="navbar-brand" to="/">Navbar</Link>						
						<div className="collapse navbar-collapse" id="navbarColor01">
							<ul className="navbar-nav me-auto">
								<li className="nav-item">
									<Link className="nav-link active" to="#">Home
										<span className="visually-hidden">(current)</span>
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/about">About</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="#">Taratata</Link>
								</li>													
							</ul>
							<ul className="navbar-nav ml-auto">
								
								<li className="nav-item">
									<Link className="nav-link" to="/login">Login</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/register">Registration</Link>
								</li>													
							</ul>
						</div>
					</div>
				</nav>
			</>
		)
	}
}

export default Navbar;