import React from 'react';
import '../App.css';
import Navbar from './Navbar';

class Home extends React.Component {
	
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<>		
				<Navbar/>
				{/* ARTICLE 1 */}
				<div className="card border-primary mb-3 w-25 m-3">
					<div className="card-header">Header</div>
					<div className="card-body">
						<h4 className="card-title">Primary card title</h4>
						<p className="card-text">
							Some quick example text to
							build on the card title and make up
							the bulk of the card's content.						
						</p>
					</div>
				</div>

				{/* ARTICLE 2 */}
				<div className="card border-primary mb-3 w-25 m-3">
					<div className="card-header">Header</div>
					<div className="card-body">
						<h4 className="card-title">Primary card title</h4>
						<p className="card-text">							
							Some quick example text 
							to build on the card title
							and make up the bulk of the card's content.
						</p>
					</div>
				</div>		
			</>			
		)
	};
}

export default Home