import React from 'react';
import Navbar from './Navbar';
import bcrypt from 'bcryptjs'
import axios from 'axios';

const salt = bcrypt.genSaltSync(10)


class Register extends React.Component {
	constructor() {
		super()
		this.state = {
			name: '',
			email: '',
			password: '',
			confirm_password: '',
		}
	}

	handleNameChange = event => {
		this.setState({ name: event.target.value }, () => {
			
		})
	}
	handleEmailChange = event => {
		this.setState({ email: event.target.value }, () => {
			
		})
	}
	handlePasswordChange = event => {
		const hashedPassword = bcrypt.hashSync(this.state.password, salt)
		this.setState({ password: hashedPassword})
		console.log(this.state)		
	}
	handleConfirmPasswordChange = event => {
		const hashedPassword = bcrypt.hashSync(this.state.confirm_password, salt)
		this.setState({ confirm_password: hashedPassword})
		console.log(this.state)
	}
	handleSubmit = event => {
		event.preventDefault()
		console.log('inscription')

		axios.post('http://127.0.0.1:8000/api/register')			 
	}

	render() {
		return (
			<>
				<Navbar/>
				<div className='container w-50'>
					<h2 className='text-center my-5'>Registration</h2>				
					<form method='POST' onSubmit={this.handleSubmit}>
						<div className="form-group">
							<label htmlFor="exampleInputEmail1" className="form-label mt-4">Name</label>
							<input onChange={this.handleNameChange} 
										 type="text" 
										 className="form-control" 
										 aria-describedby="emailHelp" 
										 placeholder="Name">
							</input>
						</div>
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
						<div className="form-group">
							<label htmlFor="exampleInputPassword1" className="form-label mt-4">Password confirmation</label> 
							<input onChange={this.handleConfirmPasswordChange} 
										 type="password" 
										 className="form-control" 
										 id="exampleInputPassword1" 
										 placeholder="Password confirmation">
							</input>
						</div>
						<button type='submit' className='mt-4 btn btn-primary'>Submit</button>
					</form>
				</div>
			</>
		)
	}
}

export default Register;