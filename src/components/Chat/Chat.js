import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import './style.css';

const headers = {
	headers: {
		'API-TOKEN': localStorage.getItem('token')
	}
}

class Chat extends React.Component {
	
	constructor() {
		super()

		this.state = {
			message: '',
			instantMessage: [],
		}
	}

	handleSubmit = event => {
		event.preventDefault()

		let bodyFormData = new FormData()
		bodyFormData.set('message', this.state.message)
		
		// POST MESSAGE IN DB
		axios.post('http://127.0.0.1:8000/api/chat', bodyFormData, headers)
		.then( response => {

			console.log("Message sent")
			console.log(response.data)
			if(response.request.status === 200) {
				//reset input value
			}
		})
		.catch(error => {
			console.log(error.response.data)
		})
	}

	handleMessage = event => {
		this.setState({ message: event.target.value }, () => {
			console.log(this.state)
		})
	}

	componentDidMount() {
		if(localStorage.getItem('token')) {
      let id = this.props.match.params.id

     // FETCH API MESSAGES
      axios.get(`http://127.0.0.1:8000/api/message`, headers)
        .then(response => {
					console.log("API OK " + response.status)
					console.log( response)
					this.setState({instantMessage: response.data})
					console.log(this.state.instantMessage)

        })        
        .catch(error => {
          console.log(error.response)
        })
    }
	}


	render() {
		return (
			<>
				<Navbar/>
				{/* LEFT MENU */}
        <div className='row w-100'>
          <div className='col-3 text-left'>
            <h4 className='m-2'>Group list</h4>
						<ul className='m-2'>
							<li>Group 1</li>
							<li>Group 2</li>
							<li>New Group +</li>
						</ul>
          </div>

					{/* CENTER MENU */}
          <div className='size-limited col-6 border rounded border-dark vh-100 shadow-lg'>
            <h2 className='text-center my-2'>Chat Page <img className='w-7 rounded-circle' src='/Sho.png' alt='logo'></img></h2>
						{/* MESSAGES */}
						
						{
							this.state.instantMessage.map((instantMessages) =>
								<div className='text-left mx-5 my-1 bg-primary rounded w-50' key={instantMessages.id}>
									{instantMessages.body}
								</div>
							)
						}

						<div className='float-right w-50 text-end mx-5 my-1 bg-warning rounded'>
							Message number 2
						</div>						

						<div>
							{/* FORM */}
							<form method="POST" onSubmit={this.handleSubmit} encType="multipart/form-data">
								<div className="form-group fix-pos">
									<label htmlFor="message"></label>
									<input type="text" 
												 id={localStorage.getItem('token')}
												 name="message"
												 onChange={this.handleMessage}
												 aria-describedby="emailHelp"
												 className="rounded mx-5 w-50 p-1 my-1" />

									<button type="submit" className="btn btn-sm btn-primary">Send</button>
								</div>								
							</form>
							{/* END FORM */}
						</div>
				  </div>
					
					{/* RIGHT MENU */}
          <div className='col-3 text-end'>
            <h4 className='m-2'>Connected</h4>
						<ul>
							<li>User</li>
							<li>User</li>
							<li>User</li>
						</ul>
          </div>
        </div>
			</>
		)
	}
}

export default Chat;