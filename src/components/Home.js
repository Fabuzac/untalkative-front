import axios from 'axios';
import React from 'react';
import '../App.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

class Home extends React.Component {
	
	constructor() {
		super();
		this.state = {
			pictures: [],
			search: ''
		};
	}

	componentDidMount() {
		axios.post('http://127.0.0.1:8000/api/pictures')
		.then(response => {
			this.setState({ pictures: response.data })
		})
		.catch(error => {
			console.log(error.response)
		})
	}

	handleSearchChange = event => {
		this.setState({ search: event.target.value }, () => { 
			// this.getArticles() dynamic search
			if(this.state.search === '') {
				this.getArticles()
			}
		 })
	}
	handleSubmit = event => {
		event.preventDefault()
		this.getArticles()
	}

	getArticles() {
		let bodyFormData = new FormData()
		bodyFormData.set('search', this.state.search)

		axios.post('http://127.0.0.1:8000/api/pictures', bodyFormData)
		.then(response => {
			this.setState({ pictures: response.data })
		})
		.catch(error => {
			console.log(error.response)
		})
	}
	

	render() {
		return (
			<>		
				<Navbar/>
				<div className='m-auto row container justify-content-center'>
					{/* SEARCH BAR */}
					<div className="d-flex justify-content-center mb-5">
							<form className="form-inline my-2 my-lg-0" method="POST" onSubmit={this.handleSubmit}>
									<input className="form-control mr-sm-2" 
												 name="search" 
											   onChange={this.handleSearchChange} 
											 	 type="search" 
												 placeholder="Search a picture here...">													
									</input>
							</form>
					</div>
					<div className='col-sm-9 row justify-content-between'>
					{/* ARTICLES */}
						{
							this.state.pictures.map((picture) => 
								<div className="card border-primary w-30 my-3 mx-1">									
									<img className="card-img-top" 
											alt="Card image"
											style={{ width: '100%' }} 
											src={ `http://127.0.0.1:8000/storage/pictures/${picture.image}` } >
									</img>
									<div className="card-body">
										<h4 className="card-title">{ picture.title }</h4>
										<p className="card-text">{ picture.description }</p>
										<figcaption className="blockquote-footer mt-1">
											Someone famous in <cite title="Source Title">Source Title</cite>
										</figcaption>										
										<Link className="btn btn-primary"
												  to={ `/pictures/${ picture.id } ` } >Learn more
										</Link>
									</div>
								</div>
							)
						}	
					</div>

					{/* LIST */}
					<div className="col-2 card border-primary my-3 mx-2 mb-3 h-25">
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