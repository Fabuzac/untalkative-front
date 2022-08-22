import React from 'react';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';

class Chat extends React.Component {
	
	constructor() {
		super()

		this.state = {
			message: '',
		}
	}

	handleSubmit = event => {
		event.preventDefault()
		
		let bodyFormData = new FormData()
		bodyFormData.set('message', this.state.message)
	}

	handleMessage = event => {
		this.setState({ message: event.target.value }, () => {
			// console.log(this.state)
		})
	}

	render() {
		return (
			<>
				<Navbar/>
        <div className='row w-100'>

          <div className='col-3 text-left'>
            <h4 className='m-2'>Group list</h4>
						<ul className='m-2'>
							<li>Group 1</li>
							<li>Group 2</li>
							<li>New Group +</li>
						</ul>
          </div>

          <div className='col-6 border rounded border-dark vh-100 shadow-lg'>
            <h2 className='text-center my-2'>Chat Page <img className='w-7 rounded-circle' src='/Sho.png' alt='logo'></img></h2>
						<div id='' className='text-left mx-5 my-1 bg-primary rounded'>
							{ this.state.message
								? <div>{this.state.message}</div>
								: <div className='text-left mx-5 my-1 bg-primary rounded'>_</div>
							}
						</div>
						<div id='' className='text-end mx-5 my-1 bg-warning rounded'>Hey, this is the second message</div>
						<div>
							{/* FORM */}
							<form method="POST" onSubmit={this.handleSubmit} encType="multipart/form-data">
								<div className="form-group">
									<label htmlFor="exampleInputEmail1">Message</label>
									<input type="text" 
												 id="exampleInputEmail1" 
												 onChange={this.handleMessage}
												 aria-describedby="emailHelp"
												 className="rounded mx-2" />
								</div>								
								<button type="submit" className="btn btn-sm btn-primary">Send</button>
							</form>
							{/* END FORM */}
						</div>
				  </div>

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