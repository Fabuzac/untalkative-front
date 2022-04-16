import React from 'react';
import Navbar from './Navbar';
import bcrypt from 'bcryptjs'

const salt = bcrypt.genSaltSync(10)

class Login extends React.Component {
	constructor() {
		super()
		this.state = {			
			email: '',
			password: '',			
		}
	}

	handleEmailChange = event => {
		this.setState({ email: event.target.value }, () => {
			console.log(this.state)
		})
	}
	handlePasswordChange = event => {
		const hashedPassword = bcrypt.hashSync(this.state.password, salt)
		this.setState({ password: hashedPassword})
		console.log(this.state)		
	}
	handleSubmit = event => {
		event.preventDefault()
		console.log('Login')
	}

	render() {
		return (
			<>
				<Navbar/>
				<div className='container w-50'>
					<h2 className='text-center my-5'>Login Page</h2>				
					<form method='POST' onSubmit={this.handleSubmit}>						
						<div className="form-group">
							<label htmlFor="exampleInputEmail1" className="form-label mt-4">Email address</label>
							<input onChange={this.handleEmailChange} 
										 type="email" 
										 className="form-control" 
										 id="exampleInputEmail1" 
										 aria-describedby="emailHelp" 
										 placeholder="Enter email">
							</input>
							<small id="emailHelp" 
										 className="form-text text-muted">We'll never share your email with anyone else.
							</small>
						</div>
						<div className="form-group">
							<label htmlFor="exampleInputPassword1" className="form-label mt-4">Password</label>
							<input onChange={this.handlePasswordChange} 
										 type="password" 
										 className="form-control" 
										 id="exampleInputPassword1" 
										 placeholder="Password">										 
							</input>
						</div>						
						<button type='submit' className='mt-4 btn btn-primary'>Submit</button>
					</form>
				</div>
			</>
		)
	}
}

export default Login;