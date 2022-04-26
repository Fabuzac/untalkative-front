import React from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class PostPicture extends React.Component {
	constructor() {
		super()
		this.state = {
			title: '',
			description: '',
			image: '',
			redirect: false
		}
	}

	handleTitleChange = event => {
		this.setState({ title: event.target.value }, () => { } )
	}
	handleDescriptionChange = event => {
		this.setState({ description: event.target.value }, () => { } )	
	}
	handleImageChange = event => {		
		this.setState({ image: event.target.files[0] }, () => { } )	
	}
	handleSubmit = event => {
		event.preventDefault()
		
		let bodyFormData = new FormData()
		bodyFormData.set('title', this.state.title)
		bodyFormData.set('description', this.state.description)
		bodyFormData.set('image', this.state.image)

		let headers = {
			headers: {
				'API-TOKEN': localStorage.getItem('token')
			}
		}

		// FETCH API DATA
		axios.post('http://127.0.0.1:8000/api/pictures', bodyFormData, headers)
			.then(response => {
				this.setState({ redirect: true })				
			})
			.catch(error => {
				if(error.response.status === 401) {
					this.setState({ errors: error.response.data.errors }, () => { console.log(this.state) })
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
				<div className="container w-50">
					<h2 className="text-center my-5">Ajouter une nouvelle photo</h2>
					<form method="POST" onSubmit={this.handleSubmit} encType="multipart/form-data">
						<div className="form-group">
							<label htmlFor="exampleInputEmail1">Titre</label>
							<input onChange={this.handleTitleChange} 
										 type="text" 
										 id="exampleInputEmail1" 
										 aria-describedby="emailHelp"
										 className={`form-control ${this.state.errors && this.state.errors.title 
										 ? "is-invalid" 
										 : ''}`} />
							{ this.state.errors && this.state.errors.title 
								? <div className="text-danger invalide-feedback">{ this.state.errors['title']}</div> 
								: '' 
							}
						</div>
						<div className="form-group">
							<label htmlFor="exampleInputPassword1">Description</label>
							<textarea onChange={this.handleDescriptionChange} 
												rows="3"
											  className={`form-control ${this.state.errors && this.state.errors.description 
												? "is-invalid" 
												: ''}`} id="exampleFormControlTextarea1">												
							</textarea>
							{ this.state.errors && this.state.errors.description 
								? <div className="text-danger invalide-feedback">{ this.state.errors['description'] }</div> 
								: '' 
							}
						</div>
						<div className="form-group my-4">
							<label htmlFor="exampleFormControlFile1">Image</label>
							<input onChange={this.handleImageChange} 
										 type="file" 
										 id="exampleFormControlFile1"
										 className={`form-control-file ${this.state.errors && this.state.errors.image 
										 ? "is-invalid" 
										 : ''}`} />
							{ this.state.errors && this.state.errors.image 
								? <div className="text-danger invalide-feedback">{ this.state.errors['image'] }</div> 
								: '' 
							}
						</div>		
						<button type="submit" className="btn btn-primary">Ajouter</button>
					</form>
			</div>
			</>
		)
	}
}

export default PostPicture