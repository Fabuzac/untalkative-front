import React from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { GoogleLoginButton } from 'react-social-login-buttons';

class Login extends React.Component {
	
	constructor() {
		super()

		this.state = {			
			email: '',
			password: '',
			redirect: false,
			errors: [],
		}
	}

	UNSAFE_componentWillMount() {
		if(localStorage.getItem('token')) {	

			this.setState({ redirect:true })
		}
	}

	handleEmailChange = event => {
		this.setState({ email: event.target.value }, () => { 
			/*console.log()*/ 
		})
	}

	handlePasswordChange = event => {
		this.setState({ password: event.target.value }, () => { 
			/*console.log()*/ 
		})	
	}

	handleSubmit = event => {
		event.preventDefault()
		
		let bodyFormData = new FormData()
		bodyFormData.set('email', this.state.email)
		bodyFormData.set('password', this.state.password)
		
		// FETCH API DATA
		axios.post('http://127.0.0.1:8000/api/login', bodyFormData)
			.then(response => {

				localStorage.setItem('token', response.data.api_token)
				this.setState({ redirect:true })
			})
			.catch(error => {
				if(error.response.status === 401) {

					this.setState({ errors: error.response.data.errors }, () => {
						console.log(this.state.errors)
					})
				}
			})
	}

	render() {
		if(this.state.redirect) {
			return (<Redirect to='/' />)
		}
		return (
			<>
				<Navbar/>
				<div className='container w-50'>
					<h2 className='text-center my-5'>Login Page</h2>				
					<form method='POST' onSubmit={this.handleSubmit}>
						{/* EMAIL */}
						<div className="form-group">
							<label htmlFor="exampleInputEmail1" 
										 className="form-label mt-4">Email address
							</label>
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
							<small id="emailHelp" 
										 className="form-text text-muted">
							</small>
							{ this.state.errors && this.state.errors.email 
								? <div className='text-danger invalide-feedback'>{ this.state.errors['email'] }</div> 
								: '' 
							}
						</div>
						{/* PASSWORD */}
						<div className="form-group">
							<label htmlFor="exampleInputPassword1" 
										 className="form-label mt-4">Password
							</label>
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
						{ this.state.errors && this.state.errors == 'Wrong login ID' 
							? <div className='mt-3 alert alert-danger text-light'>Wrong login ID</div> 
							: '' 
						}
						<button type='submit' className='mt-4 btn btn-primary'>Submit</button>
					</form>
				</div>
				<div className="d-flex justify-content-center mt-5">
					<a href="http://127.0.0.1:8000/auth/redirect/google">
						<GoogleLoginButton style={{ maxWidth: 400, minWidth: 300}}/>
					</a>
				</div>
			</>
		)
	}
}

export default Login;