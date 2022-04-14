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
				<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
					<div class="container-fluid">
						<Link class="navbar-brand" to="/">Navbar</Link>						
						<div class="collapse navbar-collapse" id="navbarColor01">
							<ul class="navbar-nav me-auto">
								<li class="nav-item">
									<a class="nav-link active" href="#">Home
										<span class="visually-hidden">(current)</span>
									</a>
								</li>
								<li class="nav-item">
									<Link class="nav-link" to="/about">About</Link>
								</li>
								<li class="nav-item">
									<Link class="nav-link" to="#">Taratata</Link>
								</li>													
							</ul>
							<ul class="navbar-nav ml-auto">
								
								<li class="nav-item">
									<Link class="nav-link" to="/login">Login</Link>
								</li>
								<li class="nav-item">
									<Link class="nav-link" to="/register">Registration</Link>
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