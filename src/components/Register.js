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
			errors: [],
		}
	}

	UNSAFE_componentWillMount() {
		if(localStorage.getItem('token')) {
			this.setState({ redirect:true })
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
				if(error.response.status === 401) {
					this.setState({ errors: error.response.data.errors }, () => { })
				}
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
					<h2 className='text-center my-2'>Registration</h2>				
					<form method='POST' onSubmit={this.handleSubmit}>

						{/* NAME */}
						<div className="form-group">
							<label htmlFor="exampleInputEmail1" className="form-label mt-4" >Name</label>
							<input onChange={this.handleNameChange} 
										 type="text" 
										 aria-describedby="emailHelp" 
										 placeholder="Name"
										 className={ `form-control ${this.state.errors && this.state.errors.name 
												? "is-invalid" 
												: '' }` 
											} >
							</input>
							{ this.state.errors && this.state.errors.name 
								? <div className='text-danger invalide-feedback'>{ this.state.errors['name'] }</div> 
								: '' 
							}
						</div>

						{/* EMAIL */}
						<div className="form-group">
							<label htmlFor="exampleInputEmail1" className="form-label mt-4">Email address</label>
							<input onChange={this.handleEmailChange} 
										 type="email" 										 
										 id="exampleInputEmail1" 
										 aria-describedby="emailHelp" 
										 placeholder="Enter email"
										 className={ `form-control ${this.state.errors && this.state.errors.email 
												? "is-invalid" 
												: '' }` 
									 		} >
							</input>
							{ this.state.errors && this.state.errors.email 
								? <div className='text-danger invalide-feedback'>{ this.state.errors['email'] }</div> 
								: '' 
							}
							<small id="emailHelp" 
										 className="form-text text-muted">We'll never share your email with anyone else.
							</small>
						</div>

						{/* PASSWORD */}
						<div className="form-group">
							<label htmlFor="exampleInputPassword1" className="form-label mt-4">Password</label>
							<input onChange={this.handlePasswordChange} 
										 type="password" 										 
										 id="exampleInputPassword1" 
										 placeholder="Password"
										 className={ `form-control ${this.state.errors && this.state.errors.password 
												? "is-invalid" 
												: '' }` 
									 		} >										 
							</input>
							{ this.state.errors && this.state.errors.password 
								? <div className='text-danger invalide-feedback'>{ this.state.errors['password'] }</div> 
								: '' 
							}
						</div>

						{/* CONFIRM PASSWORD */}
						<div className="form-group">
							<label htmlFor="exampleInputPassword1" className="form-label mt-4">Password confirmation</label> 
							<input onChange={this.handleConfirmPasswordChange} 
										 type="password" 										 
										 id="exampleInputPassword1" 
										 placeholder="Password confirmation"
										 className={ `form-control ${this.state.errors && this.state.errors.confirm_password 
												? "is-invalid" 
												: '' }` 
									 		} >
							</input>
							{ this.state.errors && this.state.errors.confirm_password 
								? <div className='text-danger invalide-feedback'>{ this.state.errors['confirm_password'] }</div> 
								: '' 
							}
						</div>
						
						<button type='submit' className='mt-4 btn btn-primary'>Submit</button>
					</form>
				</div>
			</>
		)
	}
}

export default Register;