import React from 'react';
import Navbar from '../Navbar/Navbar';

class Chat extends React.Component {
	
	constructor() {
		super()

		this.state = {
			errors: [],
		}
	}

	render() {
		return (
			<>
				<Navbar/>
				<div className='container w-50'>
					<h2 className='text-center my-5'>Chat Page</h2>				
					{/* commit udpate */}
				</div>
			</>
		)
	}
}

export default Chat;