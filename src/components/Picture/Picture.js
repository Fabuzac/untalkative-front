import React from 'react';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import AppLoader from '../AppLoader/AppLoader';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

const headers = {
  headers: {
    'API-TOKEN': localStorage.getItem('token')
  }
}

class Picture extends React.Component {

	constructor() {
		super()

		this.state = {
			redirect: false,
      picture: {},
      liked: false
		}
	}

  componentDidMount() {

    if(localStorage.getItem('token')) {
      let id = this.props.match.params.id

      // FETCH API PICTURE ID
      axios.get(`http://127.0.0.1:8000/api/pictures/${id}`, headers)
        .then(response => {

          this.setState({ picture: response.data }, () => {
            this.checkLike()
          })          
        })        
        .catch(error => {
          console.log(error.response)
        })

    } else {
      this.setState({ redirect: true })
    }
  }

  checkLike() {

    // API CHECK IF USER LIKED A PICTURE
    axios.get(`http://127.0.0.1:8000/api/pictures/${this.state.picture.id}/checkLike`, headers)
      .then(response => {

        this.setState({ liked : response.data })
      })
      .catch(error => {
        console.log(error.response)
      })
  }

  handleLike() {
    
    // API LIKE/UNLIKE FEATURE
    axios.get(`http://127.0.0.1:8000/api/pictures/${this.state.picture.id}/handleLike`, headers)
      .then(response => {

        this.checkLike()
      })
      .catch(error => {
        console.log(error.response)
      })
  }

  render() {
    if(this.state.redirect) {
			return (<Redirect to='/' />)
		}
    return (      
      <>
        <Navbar/>
        <div className='container my-5'>
          { // IF
            this.state.picture && this.state.picture.user
            ? // THEN
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
                    {
                      this.state.liked
                      ?
                        <>
                          <FavoriteIcon onClick={ () => this.handleLike()} />Unlike
                        </>
                      :
                        <>
                          <FavoriteBorderIcon onClick={ () => this.handleLike()} />Like
                        </>
                    }
                  </div>
                </div>
              </div>
            : // ELSE (LAZY LOADING)
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