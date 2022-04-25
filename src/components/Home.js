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
				<div className='m-auto row'>
					{/* ARTICLE 1 */}
					<div className="card border-primary mb-3 w-25 m-3 col-sm h-25">
						<div className="card-header">Header</div>
						<div className="card-body">
							<h4 className="card-title">Primary card title</h4>
							<p className="card-text">
								Some quick example text to
								build on the card title and make up
								the bulk of the card's content.						
							</p>
							<figcaption className="blockquote-footer mt-1">
								Someone famous in <cite title="Source Title">Source Title</cite>
							</figcaption>
						</div>
					</div>

					{/* ARTICLE 2 */}
					<div className="card border-primary mb-3 w-25 m-3 col-sm h-25">
						<div className="card-header">Header</div>
						<div className="card-body">
							<h4 className="card-title">Primary card title</h4>
							<p className="card-text">							
								Some quick example text 
								to build on the card title
								and make up the bulk of the card's content.
							</p>
							<figcaption className="blockquote-footer mt-1">
								Someone famous in <cite title="Source Title">Source Title</cite>
							</figcaption>
						</div>
					</div>	

					{/* LIST */}
					<div className="card border-primary mb-3 w-25 m-3 w-25">
						<div className="card-header">List</div>
						<div className="card-body">
							<h4 className="card-title">Primary card title</h4>
							<ul>
								<li>Some quick</li>
								<li>Example text</li>
								<li>Card title</li>
								<li>Make up the bulk</li>
							</ul>
							<figcaption className="blockquote-footer mt-1">
								Someone famous in <cite title="Source Title">Source Title</cite>
							</figcaption>
						</div>

						<div className="card-body">
							<h4 className="card-title">New Title List</h4>
							<ul>
								<li>Lorem</li>
								<li>Ipsum Tatum</li>
								<li>Card title</li>
								<li>Make up the bulk</li>
							</ul>
						</div>
					</div>		
				</div>				
			</>			
		)
	};
}

export default Home