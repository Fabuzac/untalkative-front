import React from 'react';
import Navbar from './Navbar';
import bcrypt from 'bcryptjs'

// const salt = bcrypt.genSaltSync(10)
// const password = passwordInputRef.current.value
// const hashedPassword = bcrypt.hashSync(password, '$2a$10$CwTycUXWue0Thq9StjUM0u')

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
			console.log(this.state)
		})
	}
	handleEmailChange = event => {
		this.setState({ email: event.target.value }, () => {
			console.log(this.state)
		})
	}
	handlePasswordChange = event => {
		this.setState({ password: event.target.value }, () => {
			console.log(this.state)
		})
	}
	handleConfirmPasswordChange = event => {
		this.setState({ confirm_password: event.target.value }, () => {
			console.log(this.state)
		})
	}

	handleSubmit = event => {
		event.preventDefault()
		console.log('inscription')
	}

	render() {
		return (
			<>
				<Navbar/>
				<div className='container w-50'>
					<h2 className='text-center my-5'>Registration</h2>				
					<form method='POST' onSubmit={this.handleSubmit}>
						<div class="form-group">
							<label for="exampleInputEmail1" class="form-label mt-4">Name</label>
							<input onChange={this.handleNameChange} 
										 type="text" 
										 class="form-control" 
										 aria-describedby="emailHelp" 
										 placeholder="Name">
							</input>
						</div>
						<div class="form-group">
							<label for="exampleInputEmail1" class="form-label mt-4">Email address</label>
							<input onChange={this.handleEmailChange} 
										 type="email" 
										 class="form-control" 
										 id="exampleInputEmail1" 
										 aria-describedby="emailHelp" 
										 placeholder="Enter email">
							</input>
							<small id="emailHelp" 
										 class="form-text text-muted">We'll never share your email with anyone else.
							</small>
						</div>
						<div class="form-group">
							<label for="exampleInputPassword1" class="form-label mt-4">Password</label>
							<input onChange={this.handlePasswordChange} 
										 type="password" 
										 class="form-control" 
										 id="exampleInputPassword1" 
										 placeholder="Password">
							</input>
						</div>
						<div class="form-group">
							<label for="exampleInputPassword1" class="form-label mt-4">Password confirmation</label>
							<input onChange={this.handleConfirmPasswordChange} 
										 type="password" 
										 class="form-control" 
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