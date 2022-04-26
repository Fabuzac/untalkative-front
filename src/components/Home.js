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
				<div className='m-auto row container'>					
					{/* ARTICLE 1 */}
					<div className="card border-primary mb-3 w-25 m-3 col-sm h-25">
						<div className="card-header">Header</div>
						<img className="card-img-top" style={{ width: '100%' }} src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22268%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20268%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18065cfd256%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A13pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18065cfd256%22%3E%3Crect%20width%3D%22268%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22100.76666641235352%22%20y%3D%2296%22%3E268x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card image cap"></img>
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
						<img className="card-img-top" style={{ width: '100%' }} src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22268%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20268%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18065cfd256%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A13pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18065cfd256%22%3E%3Crect%20width%3D%22268%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22100.76666641235352%22%20y%3D%2296%22%3E268x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card image cap"></img>
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