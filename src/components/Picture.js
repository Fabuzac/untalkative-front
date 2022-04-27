import React from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import AppLoader from './AppLoader';

class Picture extends React.Component {
	constructor() {
		super()
		this.state = {
			redirect: false,
      picture: {}
		}
	}

  componentDidMount() {
    if(localStorage.getItem('token')) {
      
      let id = this.props.match.params.id
      let headers = {
        headers: {
          'API-TOKEN': localStorage.getItem('token')
        }
      }

      // FETCH API DATA
      axios.get(`http://127.0.0.1:8000/api/pictures/${id}`, headers)
        .then(response => {
          this.setState({ picture: response.data })          
        })
        .catch(error => {
          console.log(error.response)
        })

    } else {
      this.setState({ redirect: true })
    }
  }

  render() {
    if(this.state.redirect) {
			return (<Redirect to='/' />)
		}
    return (      
      <>
        <Navbar/>
        <div className='container my-5'>
          {
            this.state.picture && this.state.picture.user
            ?
              <div className='row'>
                <div className='col-5'>
                  <img className='img-fluid w-50' src={`http://127.0.0.1:8000/storage/pictures/${this.state.picture.image}`}></img>
                </div>
                <div className='col-4'>                  
                  <div className='description'>
                    <h2>{this.state.picture.title}</h2>
                    <p>{this.state.picture.description}</p>
                  </div>
                  <div className='author mt-5'>
                    <h5>Author: <span className='badge bg-dark'>{this.state.picture.user.name}</span></h5>  
                  </div>
                </div>
              </div>
            :
            <div className='d-flex justify-content-center'>
              <AppLoader />
            </div>
          }          
        </div>
      </>
    )
  }
}

export default Picture