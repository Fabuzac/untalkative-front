import React from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Register extends React.Component {
	constructor() {
		super()
		
		this.state = {
			name: '',
			email: '',
			password: '',
			confirm_password: '',
			redirect: false,
		}
	}

	handleNameChange = event => {
		this.setState({ name: event.target.value }, () => { })
	}
	handleEmailChange = event => {
		this.setState({ email: event.target.value }, () => { })
	}
	handlePasswordChange = event => {
		this.setState({ password: event.target.value }, () => { })
	}
	handleConfirmPasswordChange = event => {
		this.setState({ confirm_password: event.target.value }, () => { })
	}

	handleSubmit = event => {
		event.preventDefault()

		let bodyFormData = new FormData()
		bodyFormData.set('name', this.state.name)
		bodyFormData.set('email', this.state.email)
		bodyFormData.set('password', this.state.password)
		bodyFormData.set('confirm_password', this.state.confirm_password)
		
		// FETCH API DATA
		axios.post('http://127.0.0.1:8000/api/register', bodyFormData)
			.then(response => {
				localStorage.setItem('token', response.data.api_token)
			})
			.catch(error => {
				console.log(error.response)
			})
	}

	render() {
		if(this.state.redirect) {
			return (<Redirect to='/'></Redirect>)
		}
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